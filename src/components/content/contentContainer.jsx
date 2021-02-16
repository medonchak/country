import React from 'react'
import {connect} from 'react-redux'
import {getUsersThunk,DeleteUser,AddUser,EditUser,Search} from '../../redux/reducer/UsersReducer'
import Content from './content'


class ContentCountainerApi extends React.Component {
    componentDidMount (){
        this.props.getUsersThunk()
    }

    render () {
        return <Content {...this.props.searchUsers} Search={this.props.Search} EditUser={this.props.EditUser} DeleteUser={this.props.DeleteUser} addUser={this.props.AddUser} {...this.props.users}/>
    }
}



const mapStateToProps =(state)=>{
    return{
      users:state.users,
      searchUsers:state.searchUsers
    }
}

const ContentContainer=connect(mapStateToProps,{getUsersThunk,AddUser,DeleteUser,EditUser,Search})(ContentCountainerApi)

export default ContentContainer;

