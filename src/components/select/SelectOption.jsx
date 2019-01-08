import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='react-ui-select-option' key={this.props.title}>
                {this.props.value}
            </div>
        )
    }

}
export default Option;

