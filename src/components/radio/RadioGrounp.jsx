import React, { Component } from 'react';

class Radio extends Component{

    render() {
        return (
            <label>
                <input type='radio' key={this.props.key}/>
                <span>{this.props.children}</span>
            </label>
        )
    }
}
export default Radio;


class RadioGrounp extends Component{
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default RadioGrounp;