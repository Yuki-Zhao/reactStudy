import React, { Component } from 'react';
import Util from './../../util/Util';

import './../../../css/components/select/Select.less';

class Select extends Component {
    constructor(props) {
        super(props);
        let selectdValue = props.selectedValue || (this.props.selectOptions && this.props.selectOptions.length > 0 && this.props.selectOptions[0].value);
        this.state = {
            selectedValue: selectdValue,
            isShow: props.isShowDropDown || false, //是否出现选项列表
            options: this.props.selectOptions, //选项列表
            searchInputPlac: selectdValue //搜索input的placehoder
        };
        this.changeValue = this.changeValue.bind(this);
        this.searchOptions = this.searchOptions.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.isShowDropDown && this.state.isShow) {
            this.clickSelectedValue();
        }
    }

    /**
     * 选择选中的值
     * @param key
     * @param value
     */
    changeValue(key, value) {
        this.setState({
            selectedValue: value,
            searchInputPlac: value,
            isShow: false
        });
        if(this.refs.selectSearchInput) {
            this.refs.selectSearchInput.value = value;
        }
        this.props.onChange && this.props.onChange(key, value);
    }


    searchOptions(e) {
        let value = e.target.value,
            that = this,
            searchOptions = [];
        if(that.props.selectOptions && that.props.selectOptions.length > 0) {
            let upperValue = value.toUpperCase();
            Util.delayCall(function () {
                if(value === '') {
                    searchOptions = that.props.selectOptions;
                } else {
                    that.props.selectOptions.forEach(function (option) {
                        if(option.value.toUpperCase().indexOf(upperValue) > -1) {
                            searchOptions.push(option);
                        }
                    });
                }
                that.showSelectDropdown(searchOptions);
            });
        }
    }
    
    clickSelectedValue(selectOptions) {
        let isShow;
        if(this.state.isShow) {
            Util.closeSelectDropdown();
            if(this.props.showSearch) {
                this.refs.selectSearchInput.blur();
                this.refs.selectSearchInput.value = '';
            }
            isShow = false;
        } else {
            this.showSelectDropdown(selectOptions);
            isShow = true;
        }
        this.setState({
            isShow: isShow
        })
    }

    showSelectDropdown(selectOptions) {
        let selectDom = this.refs.select;
        let that = this;
        Util.showSelectDropdown(selectOptions, {
            left: selectDom.offsetLeft,
            top: selectDom.offsetTop + 30 + 5,
            customOption: this.props.customOption,
            onChange: (key, value) => {
                that.changeValue(key, value);
            }
        });
    }

    render() {
        return (
            <div className='react-ui-select' ref='select'>
                <div className='react-ui-select-selected'
                     onClick={this.clickSelectedValue.bind(this, this.props.selectOptions)}

                >
                    {
                        this.props.showSearch ?
                            <div className="react-ui-select-search">
                                <input onChange={this.searchOptions}
                                       placeholder={this.state.searchInputPlac}
                                       ref="selectSearchInput"
                                />
                            </div> :
                            <div className='react-ui-select-selected-value'>{this.state.selectedValue}</div>
                    }
                    <span className='ui-icon-down' style={{transform: this.state.isShow ? 'rotate(180deg)' : 'rotate(0deg)',transition:'transform 1s linear'}}/>
                </div>
            </div>
        )
    }

}
export default Select;

