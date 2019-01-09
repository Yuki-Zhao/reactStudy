import React, { Component } from 'react';
import Util from './util/Util';
import Select from './components/select/Select';

import './../css/components/Index.less';

const selectOptions = [{
    key: 'jank',
    value: 'JANG'
},{
    key: 'lily',
    value: 'LILY'
}, {
    key: 'andy',
    value: 'ANDY'
}];

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSelectDropDown: false
        };
        this.onClick = this.onClick.bind(this);
    }

    /**
     * select下拉列表失去焦点
     * @param e
     */
    onClick(e) {
        if(!Util.isShowSelectDropdown) {
            Util.closeSelectDropdown();
            this.setState({
                isShowSelectDropDown: false
            })
        }
    }

    render() {
        return (
            <div className='react-ui-index' onMouseDown={this.onClick}>
                <div className='react-ui-head'>
                    <div>React-UI</div>
                </div>
                <div className='react-ui-index-container'>
                    <div className='react-ui-components-type'>Select选择器</div>
                    <div className='react-ui-components'>
                        <div className='react-ui-components-name'>默认Select</div>
                        <Select selectOptions={selectOptions} />
                    </div>
                    {<div className='react-ui-components'>
                        <div className='react-ui-components-name'>有自定义选项的Select</div>
                        <Select selectOptions={selectOptions} customOption={true} />
                    </div>}
                    <div className='react-ui-components'>
                        <div className='react-ui-components-name'>可搜索的Select</div>
                        <Select selectOptions={selectOptions} isShowDropDown={this.state.isShowSelectDropDown} showSearch={true} />
                    </div>
                </div>
            </div>
        )
    }

}
export default Index;

