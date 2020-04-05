import React from "react"
import axios from 'axios';
import { connect } from 'react-redux';
import { userActions } from "../actions";
import UserDisPlayComp from './UserDisplay.js'

class User extends React.Component{
   componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.props.allUsers(persons);
    })
   }
    render(){
        return(
            <UserDisPlayComp localData={this.props.localData}/>
        );
    }
}

// retrevie the store data to component when ever store data got updated.
const mapStateToProps = (state) => {
    return {
        localData: state.userSearchdata
    }
} 

// dispatch to action and store
const mapDispatchToProps = (dispatch) => ({
    allUsers: (persons) => dispatch(userActions.showUsers(persons))
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(User)