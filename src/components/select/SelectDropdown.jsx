import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Option from './SelectOption';

import './../../../css/components/select/SelectDropdown.less';

let _SelectDropdown = null;
class SelectDropdown extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            selectedValue: ''
        }
    }


    componentWillUnmount() {
        _SelectDropdown = null;
    }

    onClick(title, value) {
        this.props.options && this.props.options.onChange(title, value);
        this.props.onClose();
    }
    
    createOptions() {
        if(this.props.values && this.props.values.length > 0) {
            let uis = [];
            this.props.values.forEach(function (option) {
                uis.push(
                    <Option key={option.key} title={option.key}
                            isActive={option.value === this.state.selectedValue}
                            onClick={this.onClick}
                    >
                        {option.value}
                    </Option>
                )
            }, this);
            if(this.props.options && this.props.options.customOption) {
                uis.push(
                    <Option key='custom' isCustom={true} onClick={this.onClick} />
                )
            }
            return uis;
        }
    }

    render() {
        return (
            <div className='react-ui-select-options'>
                {this.createOptions()}
            </div>
        )
    }

}
SelectDropdown.getInstance = function () {
    let div = document.createElement('div');
    div.className += 'react-ui-select-dropdowm';
    div.style.position = 'absolute';
    document.body.appendChild(div);
    return {
        show(props) {
            props.onClose = function () {
                ReactDOM.unmountComponentAtNode(div);
            };
            if (_SelectDropdown) {
                _SelectDropdown.close();
            }
            if(props.options) {
                div.style.left = props.options.left + 'px';
                div.style.top = props.options.top + 'px';
            }
            ReactDOM.render(React.createElement(SelectDropdown, props), div);
        },
        close() {
            if (_SelectDropdown) {
                _SelectDropdown.close();
            }
            ReactDOM.unmountComponentAtNode(div);
        }
    };
};

export default SelectDropdown;

