import React, { Component } from 'react';
import Radio from './Radio.tsx';

class RadioIndex extends Componyent {
    render() {
        return (
            <div className='react-ui-components-select'>
                <div className='react-ui-components-type'>Select选择器</div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>默认Select</div>
                    <Radio value="num1">默认单选框</Radio>
                </div>
            </div>
        )
    }

}
export default RadioIndex;

