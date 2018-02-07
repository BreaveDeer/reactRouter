import React , { Component } from 'react'
import {Redirect , Switch , Route , NavLink} from 'react-router-dom'

import { Bundle , BundleFun} from '../common/Bundle';
import List from 'bundle-loader?lazy&name=app-[name]!./list.js';
import Display from 'bundle-loader?lazy&name=app-[name]!./display.js';
import Second from './second';
import Test from './test.bundle';

export  default class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>
                    <NavLink exact activeClassName="selected" to="/list">List</NavLink>
                    <NavLink exact  activeClassName="selected" to="/display" >Display</NavLink>
                    <NavLink exact  activeClassName="selected" to="/second" >Second</NavLink>
                    <NavLink exact  activeClassName="selected" to="/test" >Test按需加载配置</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" render={()=> <Redirect to="/list" />}/>
                    <Route path="/list" component={()=>BundleFun(List)}/>
                    <Route path="/display" component={()=>BundleFun(Display)}/>
                    <Route path="/test" component={()=>BundleFun(Test)}/>
                    <Route exact path="/second" component={() => <Second title="首页"/>}/>
                    <Route exact path="/noFound" render={()=><div>没有找到页面</div>}/>
                    <Route exact path="/*" render={()=><Redirect to="/noFound" />}/>
                </Switch>
            </div>
        )
    }
}
