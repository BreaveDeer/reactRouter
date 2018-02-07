import React , { Component } from 'react';
import { NavLink,Redirect, Switch , Route ,withRouter} from 'react-router-dom'

import { Bundle , BundleFun} from '../common/Bundle';
import List1 from 'bundle-loader?lazy&name=app-[name]!./list1.js';
import List2 from 'bundle-loader?lazy&name=app-[name]!./list2.js';

class List extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return (
            <div>
                <div>
                    <NavLink exact  activeClassName="selected" to={`${this.props.match.url}/list1`}>list1</NavLink>
                    <NavLink exact activeClassName="selected"  to={`${this.props.match.url}/list2`}>list2</NavLink>
                </div>
                <Switch>
                    <Route path={`${this.props.match.url}/list1`} component={()=>BundleFun(List1)} />
                    <Route path={`${this.props.match.url}/list2`} component={()=>BundleFun(List2)} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(List)
