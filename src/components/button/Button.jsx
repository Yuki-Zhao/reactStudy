import React, { Component } from 'react';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    clickButton() {

    }

    getContainer() {
        if(this.props.buttons && this.props.buttons.length > 0) {
            let uis = [];
            this.props.buttons.forEach(function (button) {
                uis.push(
                    <div className='react-ui-button-tab' key={button.key} onClick={this.clickButton.bind(this, button.key, button.value)}>
                        <span>{button.value}</span>
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
export default Button;

