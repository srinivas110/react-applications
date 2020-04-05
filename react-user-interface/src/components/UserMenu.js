import React from "react"
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class UserMenu extends React.Component{ 
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
    const { activeItem } = this.state
    return(
        <div>
        <Menu>
        <Menu.Item name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} as={Link} to="/">
           Home    
        </Menu.Item>
        <Menu.Item name='users'
          active={activeItem === 'users'}
          onClick={this.handleItemClick} as={Link} to="/users">
            Users
        </Menu.Item>    
      </Menu>
      </div>
      );
    }
} 

export default UserMenu