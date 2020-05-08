import React, { Component } from 'react';
import data from '../assest/autoparts.json'
import ButtonReact from 'react-bootstrap/Button';


export default class extends Component {
    data = require('../assest/autoparts.json');
    constructor(props) {
        super(props);
        this.state = {"isLogged" : true};
    }

setLoginStatus() {
    console.log("user json : "+ data.employees[0].name);
    this.props.loginstate(this.state.isLogged, data.employees[0]);
}

    render() {
        return(
<div>
<p>UserName : <input type="text"></input>   </p>
<p>Password : <input type="text"></input>   </p>
<ButtonReact variant="primary" onClick={() => this.setLoginStatus()}  >Login</ButtonReact>
</div>

        );
    }

}