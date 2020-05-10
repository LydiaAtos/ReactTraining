import React, { Component } from 'react';
import data from '../assest/autoparts.json'
import ButtonReact from 'react-bootstrap/Button';


export default class extends Component {
    data = require('../assest/autoparts.json');
    constructor(props) {
        super(props);
        this.state = {"isLogged" : true,
    "error" : ""};
    
        this.loginRef = React.createRef();
    }

setLoginStatus() {
    console.log("current : "+ this.loginRef.current.childNodes[1].childNodes[1].value);
    if(this.loginRef.current.childNodes[1].childNodes[1].value == "") {
        //this.loginRef.error = "please enter username";
        this.setState({"isLogged" : true,
        "error" : "Please enter username"});
    } else if(this.loginRef.current.childNodes[2].childNodes[1].value == "") {
        //this.loginRef.error = "please enter password";
        this.setState({"isLogged" : true,
        "error" : "Please enter password"});
    } else { 
        console.log("props " + JSON.stringify(this.props));
        this.props.loginstate(this.state.isLogged, data.employees[0]);
    }
    
}

    render() {
        return(
<div ref={this.loginRef}>
        <p ref="error">{this.state.error}</p>
<p>UserName : <input type="text" id="user_name" ></input>   </p>
<p>Password : <input type="text" id="password"></input>   </p>
<ButtonReact variant="primary" onClick={() => this.setLoginStatus()}  >Login</ButtonReact>
</div>

        );
    }

}