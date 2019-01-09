import React, { Component } from 'react';

import './../../../css/components/select/SelectOption.less';

class Option extends Component {
    constructor(props) {
        super(props);
    }

    onClick(title) {
        if(title === 'custom') {
            this.props.onClick(this.props.title, this.refs.customInput.value);
        } else {
            this.props.onClick(this.props.title, this.props.children);
        }
    }

    render() {
        return (
            this.props.isCustom ?
            <div className='react-ui-select-custom-option'>
                <input ref='customInput'/>
                <span className='ui-icon-check' onClick={this.onClick.bind(this, 'custom')}/>
            </div> :
            <div className={'react-ui-select-option'+ (this.props.isActive ? ' active' : '')}
                key={this.props.title}
                onClick={this.onClick.bind(this, this.props.title, this.props.children)}
            >
                {this.props.children}
            </div>
        )
    }

}
export default Option;

