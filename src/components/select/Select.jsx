import React, { Component } from 'react';
import Option from './SelectOption';
import Util from './../../util/Util';

import './../../../css/components/select/Select.less';
//todo 失去焦点收起下拉列表问题

class Select extends Component {
    constructor(props) {
        super(props);
        let selectdValue = props.selectedValue || (this.props.selectOptions && this.props.selectOptions.length > 0 && this.props.selectOptions[0].value);
        this.state = {
            selectedValue: selectdValue,
            isShow: false, //是否出现选项列表
            options: this.props.selectOptions, //选项列表
            searchInputPlac: selectdValue //搜索input的placehoder
        };
        this.changeValue = this.changeValue.bind(this);
        this.searchOptions = this.searchOptions.bind(this);
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
        this.refs.selectSearchInput.value = value;
        this.props.onChange && this.props.onChange(key, value);
    }

    createOptions() {
        if(this.state.options && this.state.options.length > 0) {
            let uis = [];
            this.state.options.forEach(function (option) {
                uis.push(
                    <Option key={option.key} title={option.key}
                            isActive={option.value === this.state.selectedValue}
                            onClick={this.changeValue}
                    >
                        {option.value}
                    </Option>
                )
            }, this);
            if(this.props.customOption) {
               uis.push(
                   <Option key='custom' isCustom={true} onClick={this.changeValue}></Option>
               ) 
            }
            return uis;
        }
    }

    searchOptions(e) {
        let value = e.target.value,
            that = this,
            searchOptions = [];
        if(that.props.selectOptions && that.props.selectOptions.length > 0) {
            let upperValue = value.toUpperCase();
            Util.delayCall(function () {
                if(value === '') {
                    that.setState({
                        isShow: true,
                        options: that.props.selectOptions
                    })
                } else {
                    that.props.selectOptions.forEach(function (option) {
                        if(option.value.toUpperCase().indexOf(upperValue) > -1) {
                            searchOptions.push(option);
                        }
                    });
                    that.setState({
                        isShow: true,
                        options: searchOptions
                    });
                }
            });
        }
    }

    searchFocus() {
        this.refs.selectSearchInput.value = '';
        this.setState({
            isShow: true,
            options: this.props.selectOptions
        })
    }

    clickSelectedValue() {
        if(this.props.showSearch) return;
        this.setState({isShow: !this.state.isShow});
    }

    render() {
        //onBlur={() => {this.setState({isShow: false})}}
        return (
            <div className='react-ui-select' tabIndex='-1' >
                <div className='react-ui-select-selected'
                     onClick={this.clickSelectedValue.bind(this)}

                >
                    {
                        this.props.showSearch ?
                            <div className="react-ui-select-search">
                                <input onChange={this.searchOptions}
                                       onFocus={this.searchFocus.bind(this)}
                                       placeholder={this.state.searchInputPlac}
                                       ref="selectSearchInput"
                                />
                            </div> :
                            <div className='react-ui-select-selected-value'>{this.state.selectedValue}</div>
                    }
                    <span className='ui-icon-down' style={{transform: this.state.isShow ? 'rotate(180deg)' : 'rotate(0deg)',transition:'transform 1s linear'}}/>
                </div>
                <div className='react-ui-select-options'
                     style={{display: this.state.isShow ? 'block' : 'none'}}
                     ref="selectOptions"
                >
                    {this.createOptions()}
                </div>
            </div>
        )
    }

}
export default Select;

