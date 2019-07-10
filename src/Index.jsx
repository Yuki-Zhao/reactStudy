import React, { Component } from 'react';
import Util from './util/Util';
import SelectIndex from './components/select/SelectIndex';
import RadioIndex from './components/radio/RadioIndex';
import { BrowserRouter, Route, Link } from "react-router-dom";

import './../css/components/Index.less';

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
        if(Util.isShowSelectDropdown === false) {
            Util.closeSelectDropdown();
            this.setState({
                isShowSelectDropDown: false
            })
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='react-ui-index' onMouseDown={this.onClick}>
                    <div className='react-ui-head'>
                        <div>React-UI</div>
                    </div>
                    <div className='react-ui-index-container'>
                        <div className='react-ui-index-nav'>
                            <ul>
                                <li><Link to="/select">Select选择器</Link></li>
                                <li><Link to="/button">Button按钮</Link></li>
                                <li><Link to="/radio">Radio单选框</Link></li>
                            </ul>
                        </div>
                        <div className='react-ui-content'>
                            <Route path="/select" component={SelectIndex}/>
                            <Route path="/button" component={ButtonIndex}/>
                            <Route path="/radio" component={RadioIndex}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}
export default Index;

