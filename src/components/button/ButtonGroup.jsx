import React, { Component } from 'react';

import './../../../css/components/buttonGroup/ButtonGroup.less';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: this.props.buttons && this.props.buttons.length > 0 && this.props.buttons[0].key
        }

    }

    clickButton(key, value, isAbled) {
        if(isAbled) return;
        this.setState({
            activeButton: key
        });
        this.props.onClick && this.props.onClick(key, value);
    }

    getButtonClassName(button) {
        let className = 'react-ui-button-tab';
        if(button.disabled) {
            className += ' disabled';
        } else if(this.state.activeButton === button.key) {
            className += ' active';
        }
        return className;
    }

    getStyle() {
        let style = {
            button:{},
            span: {}
        };
        if(!this.props.size) {
            style.button.width = '96px';
            style.button.height = '32px';
            style.span.padding = '8px 0'
        } else if(this.props.size === 'large') {
            style.button.width = '140px';
            style.button.height = '38px';
            style.span.padding = '12px 0'
        } else if(this.props.size === 'small') {
            style.button.width = '80px';
            style.button.height = '24px';
            style.span.padding = '4px 0'
        }
        return style;
    }

    getContainer() {
        if(this.props.buttons && this.props.buttons.length > 0) {
            let uis = [];
            let style = this.getStyle();
            this.props.buttons.forEach(function (button) {
                uis.push(
                    <div className={this.getButtonClassName(button)} key={button.key}
                         onClick={this.clickButton.bind(this, button.key, button.value, button.disabled)}
                         style={style.button}
                    >
                        <span style={style.span}>{button.value}</span>
                    </div>
                )
            }, this);
            return uis;
        }
    }

    render() {
        return (
            <div className='react-ui-button-group'>
                {this.getContainer()}
            </div>
        )
    }

}
export default ButtonGroup;

