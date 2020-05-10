import React, { Component } from 'react';
import './App.css';
import Login from './login/Login'
import Home from './home/home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './component/Register';




class App extends Component {


constructor(props) {
  super(props);
  this.state = [{"isLogged" : false}];
  this.setLoginStatus = this.setLoginStatus.bind(this);
  this.setRegisterStatus = this.setRegisterStatus.bind(this);
}

render() {
  if(this.state[0].isLogged) {
    return <Home userDetail={this.state[1]}/>
    } else {
    return(
    <div>
    {/* <Login  loginstate={this.setLoginStatus}/> */}
    
    <Router>
    <ul role="nav">
      {/* <li><Link to="/">Home</Link></li> */}
      <li><Link to="/Login">Login</Link></li>
      <li><Link to="/Register">Register</Link></li>
    </ul>

    {/* <Route exact path='/Home' 
    render={props => <Home {...props} userDetail={this.state[1]}/>}
    /> */}

    <Route exact path='/Login' 
    render={props => <Login {...props} loginstate={this.setLoginStatus}/>}
    />
    {/* <Route exact path='/Register' component={Register} /> */}
    <Route exact path='/Register' 
    render={props => <Register {...props} registerState={this.setRegisterStatus} />
    }
    />
   
    </Router>
    </div>);
    }
}

setRegisterStatus(data) {
  this.setState(
    [
      {"isLogged" : true},
      {"userDetail" : data}
    ]
  );
}

setLoginStatus(isLogged, data) {
  console.log("isLogged : " + isLogged);
  console.log("data : " + data);
  if(isLogged == undefined) return;
  this.setState(
    [
      {"isLogged" : isLogged},
      {"userDetail" : data}
    ]
  );
}



}

export default App;
