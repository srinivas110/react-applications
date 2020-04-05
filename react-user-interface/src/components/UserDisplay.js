import React from "react"

class UserDisPlayComp extends React.Component{
    render(){
        return(
            <ul>
                {this.props.localData && this.props.localData.users?this.props.localData.users.map(
                    (user,index)=> <li>{user.email}</li>):''
                }
            </ul>
        )
    }
}


export default UserDisPlayComp
