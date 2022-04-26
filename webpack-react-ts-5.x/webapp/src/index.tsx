import React from 'react';
import ReactDom from 'react-dom';
import './assets/less/index.less';
import './assets/icon/iconfont.js';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
