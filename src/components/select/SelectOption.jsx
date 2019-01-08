import React, { Component } from 'react';

import './../../../css/components/select/SelectOption.less';

class Option extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.title, this.props.children)
    }

    render() {
        return (
            this.props.isCustom ?
            <div className='react-ui-select-custom-option'>
                <input ref='customInput'/>
                <span className='ui-icon-check' onClick={(e) => {this.props.onClick('custom', this.refs.customInput.value)}}/>
            </div> :
            <div className={'react-ui-select-option'+ (this.props.isActive ? ' active' : '')}
                key={this.props.title}
                onClick={this.onClick}
            >
                {this.props.children}
            </div>
        )
    }

}
export default Option;

