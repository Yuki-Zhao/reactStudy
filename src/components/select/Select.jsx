import React, { Component } from 'react';
import Option from './SelectOption';

import './../../../css/components/select/Select.less';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: props.selectedValue || (this.props.selectOptions.length > 0 && this.props.selectOptions[0].value),
            isShow: false //是否出现选项列表
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(key, value) {
        this.setState({
            selectedValue: value,
            isShow: false
        });
        this.props.onChange && this.props.onChange(key, value);
    }

    createOptions() {
        if(this.props.selectOptions && this.props.selectOptions.length > 0) {
            let uis = [];
            this.props.selectOptions.forEach(function (option) {
                uis.push(
                    <Option key={option.key} title={option.key}
                            isActive={option.value === this.state.selectedValue}
                            onClick={this.onChange}
                    >
                        {option.value}
                    </Option>
                )
            }, this);
            if(this.props.customOption) {
               uis.push(
                   <Option key='custom' isCustom={true} onClick={this.onChange}>
                       
                   </Option>
               ) 
            }
            return uis;
        }
    }

    updataState(isShow) {
        this.setState({
            isShow: isShow
        });
    }

    render() {
        return (
            <div className='react-ui-select' tabIndex='-1' onBlur={this.updataState.bind(this, false)}>
                <div className='react-ui-select-selected' onClick={this.updataState.bind(this, !this.state.isShow)}>
                    this.props.showSearch ? <div></div> : <div className='react-ui-select-selected-value'>{this.state.selectedValue}</div>
                    <span className='ui-icon-down' style={{transform: this.state.isShow ? 'rotate(180deg)' : 'rotate(0deg)',transition:'transform 1s linear'}}/>
                </div>
                <div className='react-ui-select-options' style={{display: this.state.isShow ? 'block' : 'none'}}>
                    {this.createOptions()}
                </div>
            </div>
        )
    }

}
export default Select;

