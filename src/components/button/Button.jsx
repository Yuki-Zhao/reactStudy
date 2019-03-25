import React, { Component } from 'react';

import './../../../css/components/buttonGroup/Button.less';


class Button extends Component {
    render() {
        return (
            <button className={'react-ui-button ' + this.props.type}>
                <span>{this.props.children}</span>
            </button>
        )
    }

}
export default Button;

