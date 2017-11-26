import React from 'react';
import {connect} from "react-redux";

import UserList from './UserList';
import {fetchUsers} from '../actions/userActions';

@connect((store) => {
    
    return {
        users: store.users.users
    }
})

export default class App extends React.Component{

    componentWillMount(){
        this.props.dispatch(fetchUsers());
    }
    render(){
        //console.log(this.props.users);
        return (
            <div>
                <UserList users={this.props.users}/>
            </div>
        );
    }
}