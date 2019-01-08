import React, { Component } from 'react';
import Select from './components/select/Select';

import './../css/components/global.less';

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
    render() {
        return (
            <div>
                {/*<Select selectOptions={selectOptions} />*/}
                {/*<Select selectOptions={selectOptions} customOption />*/}
                <Select selectOptions={selectOptions} showSearch={true} />
            </div>
        )
    }

}
export default Index;

