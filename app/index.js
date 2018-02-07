import 'react-hot-loader/patch'
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import './style/base.css';

// 引入路由配置模块
import Root from './routes.js';

const mountNode = document.getElementById('box'); // 设置要挂在的点

// 封装 render
const render = (Component) => {
    ReactDOM.render((
        <AppContainer>
            <Component/>
        </AppContainer>
    ), mountNode);
};

render(Root); // 初始化

if (module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}