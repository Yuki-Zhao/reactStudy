import React, { Component } from 'react';

import './../../../css/components/select/SelectOption.less';

class Option extends Component {
    constructor(props) {
        super(props);
    }

    onFocus() {
        console.log('');
    }

    render() {
        return (
            this.props.isCustom ?
            <div className='react-ui-select-custom-option'>
                <input ref='customInput' onFocus={this.onFocus.bind(this)}/>
                <span className='ui-icon-check' onClick={(e) => {this.props.onClick('custom', this.refs.customInput.value)}}/>
            </div> :
            <div className={'react-ui-select-option'+ (this.props.isActive ? ' active' : '')}
                key={this.props.title}
                onClick={this.props.onClick.bind(this, this.props.title, this.props.children)}
            >
                {this.props.children}
            </div>
        )
    }

}
export default Option;

