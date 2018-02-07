import React , { Component } from 'react';
import { withRouter} from 'react-router-dom'

class List1 extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return (
            <div>List1</div>
        )
    }
}

export default withRouter(List1);