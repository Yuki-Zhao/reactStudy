import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';


const buttons = [{
    key: 'button1',
    value: 'button1'
},{
    key: 'button2',
    value: 'button2',
    disabled: true
}, {
    key: 'button3',
    value: 'button3'
}];

class SelectIndex extends Component {
    render() {
        return (
            <div className='react-ui-components-select'>
                <div className='react-ui-components-type'>ButtonGounp按钮</div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>连体Button</div>
                    <ButtonGroup buttons={buttons} />
                </div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>连体小号Button</div>
                    <ButtonGroup buttons={buttons} size={'small'}/>
                </div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>连体大号Button</div>
                    <ButtonGroup buttons={buttons} size={'large'}/>
                </div>
                <div className='react-ui-components-type'>Button</div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>Button Primary</div>
                    <Button type={'primary'}>Primary</Button>
                </div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>Button Default</div>
                    <Button type={'default'}>Default</Button>
                </div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>Button Dashed</div>
                    <Button type={'dashed'}>Dashed</Button>
                </div>
                <div className='react-ui-components'>
                    <div className='react-ui-components-name'>Button Danger</div>
                    <Button type={'danger'}>Danger</Button>
                </div>
            </div>
        )
    }

}
export default SelectIndex;

