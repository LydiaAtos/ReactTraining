import React, { Component } from 'react';
import ButtonReact from 'react-bootstrap/Button';
import data from '../assest/autoparts.json'

export default class Register extends Component {
    data = require('../assest/autoparts.json');
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>First Name : <input type="text"></input>   </p>
                <p>Last Name : <input type="text"></input>   </p>
                <p>User Name : <input type="text"></input>   </p>
                <p>Password : <input type="text"></input>   </p>
                <ButtonReact variant="primary" onClick={() => this.setLoginStatus()}  >Register</ButtonReact>
            </div>
        );
    }


    setLoginStatus() {
        //this.props.history.push("/");
        this.props.registerState(data.employees[0]);
    }
}