import React, { Component } from 'react';
import './App.css';
import Login from './login/Login'
import Home from './home/home'


class App extends Component {

constructor() {
  super();
  this.state = [{"isLogged" : false}];
  this.setLoginStatus = this.setLoginStatus.bind(this);
}

render() {
  if(this.state[0].isLogged) {
    return <Home userDetail={this.state[1]}/>
    } else {
    return <Login  loginstate={this.setLoginStatus}/>
    }
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
