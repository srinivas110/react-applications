import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import User from "./components/Users.js";
import { Provider } from 'react-redux';
import { store } from './reducers/store';

import { Switch, Route,BrowserRouter} from 'react-router-dom'

const render = () => ReactDOM.render(
    <Provider store={store}>
	<BrowserRouter>
    <App/>
       <Switch>
            <Route path="/users" component={User} />
     </Switch>
    </BrowserRouter>
		
	</Provider>, document.getElementById("root")
);
render()
store.subscribe(render)