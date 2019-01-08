import React, { Component } from 'react';
import Option from './SelectOption';

import './../../../css/components/select/Select.less';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: props.selectedValue || ''
        };
    }

    createOptions() {
        if(this.props.selectOptions && this.props.selectOptions.length > 0) {
            let uis = [];
            if(this.props.optGroup) {

            } else {
                this.props.selectOptions.forEach(function (option) {
                    uis.push(
                        <Option key={option.key} title={option.key}>{option.value}</Option>
                    )
                });
            }
            return uis;
        }
    }

    render() {
        return (
            <div className='react-ui-select'>
                <div className='react-ui-select-selected'>
                    <div className='react-ui-select-selected-value'>{this.state.selectedValue}</div>
                    <span className='react-ui-down' />
                </div>
                <div className='react-ui-select-options'>
                    {this.createOptions()}
                </div>
            </div>
        )
    }

}
export default Select;

