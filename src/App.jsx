import React from 'react';
import ReactDom from 'react-dom';
import Index from "./Index";

import './../css/components/global.less';

ReactDom.render(
    <Index />,
    document.getElementById('app')
);