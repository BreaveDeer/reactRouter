import React , { Component } from 'react';
import { Switch , Route , withRouter} from 'react-router-dom'

class Second extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return (
            <div>{this.props.title}</div>
        )
    }
}

export default withRouter(Second);
