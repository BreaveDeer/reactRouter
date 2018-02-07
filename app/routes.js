import React , { Component } from 'react';

import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import App from './component/app';

// Router 下边只能有一个节点
class Root extends  Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={App}/>
                    <Route render={() => (<Redirect to="/"/>)}/>
                </Switch>
            </HashRouter>
        )
    }
}
export default Root;

