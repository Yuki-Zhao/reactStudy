import React, { Component } from 'react';
import Select from './components/select/Select';

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
                <Select selectOptions={selectOptions} />
            </div>
        )
    }

}
export default Index;

