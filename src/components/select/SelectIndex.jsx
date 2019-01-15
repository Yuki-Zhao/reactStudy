import React, { Component } from 'react';
import Select from './Select';


const selectOptions = [{
    key: 'jank',
    value: 'JANG'
},{
    key: 'lily',
    value: 'LILY',
    disabled: true
}, {
    key: 'andy',
    value: 'ANDY'
}];

class SelectIndex extends Component {
    render() {
        return (
            <div className='react-ui-components-select'>
                <div className='react-ui-components-type'>Select选择器</div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>默认Select</div>
                    <Select selectOptions={selectOptions} />
                </div>
            </div>
        )
    }

}
export default SelectIndex;

