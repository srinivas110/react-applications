import React from "react";
import UserMenu from "./components/UserMenu.js";
import 'semantic-ui-css/semantic.min.css'; 

class App extends React.Component{   

    state = {
        name: "Srinivas"
      };
      render(){
          return(
            <div>
                <UserMenu/>
            </div>
          );
      } 
}

export default App