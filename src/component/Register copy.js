import React, { Component } from 'react';
import ButtonReact from 'react-bootstrap/Button';
import data from '../assest/autoparts.json';
import validator from 'validation';


const required = (value) => {
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return 'require';
    }
  };
   
  const email = (value) => {
    if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`
    }
  };
   
  const lt = (value, props) => {
    // get the maxLength from component's props
    if (!value.toString().trim().length > props.maxLength) {
      // Return jsx
      return <span className="error">The value exceeded {props.maxLength} symbols.</span>
    }
  };
   
  const password = (value, props, components) => {
    // NOTE: Tricky place. The 'value' argument is always current component's value.
    // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
    // But if we're changing 'confirm' component - the condition will always be true
    // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
    if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
      // 'confirm' - name of input
      // components['confirm'] - array of same-name components because of checkboxes and radios
      return <span className="error">Passwords are not equal.</span>
    }
  };




export default class Register extends Component {
    data = require('../assest/autoparts.json');
    constructor(props) {
        super(props);
        this.state = {"hasError" : false,
    "errorMessage": ""};
    this.RegisterRef = React.createRef();
    }
    
    render() {

          if (this.state.hasError) {
              // Simulate a JS error
              throw new Error('I crashed!');
            }
        return(
            <div ref={this.RegisterRef}>
                <p id="error" style={{ color: 'red' }}>{this.state.errorMessage}</p>
                <p>First Name : <input type="text" id="first_name"></input>   </p>
                <p>Last Name : <input type="text"></input>   </p>
                <p>Email : <input type="text"></input>   </p>
                <p>User Name : <input type="text"></input>   </p>
                <p>Password : <input type="text"></input>   </p>
                <ButtonReact variant="primary" onClick={() => this.setRegisterStatus()}  >Register</ButtonReact>
                {/* <ButtonReact variant="primary" onClick={this.validateForm}  >Register</ButtonReact> */}
               
            </div>
        );        
    }

  
    setRegisterStatus() {
        // this.setState({"hasError" : true,
        // "errorMessage": "error"})
        //throw new Error('I crashed!');
        //this.props.history.push("/");

        if(this.RegisterRef.current.childNodes[1].childNodes[1].value == "") {
            this.setState({"hasError" : false,
            "errorMessage": "Please enter first name"});
            return;
        }
        if(this.RegisterRef.current.childNodes[2].childNodes[1].value == "") {
            this.setState({"hasError" : false,
            "errorMessage": "Please enter last name"});
            return;
        }

        if(this.RegisterRef.current.childNodes[3].childNodes[1].value == "") {
            this.setState({"hasError" : false,
            "errorMessage": "Please enter email"});
            return;
        }

        if(this.RegisterRef.current.childNodes[4].childNodes[1].value == "") {
            this.setState({"hasError" : false,
            "errorMessage": "Please enter user name"});
            return;
        }

        if(this.RegisterRef.current.childNodes[5].childNodes[1].value == "") {
            this.setState({"hasError" : false,
            "errorMessage": "Please enter password"});
            return;
        }

        this.props.registerState(data.employees[1]);
    }

    // componentDidCatch(error, errorInfo) {
    //      // You can also log the error to an error reporting service
    //      //logErrorToMyService(error, errorInfo);
    //      this.setState({"hasError" : true,
    //      "errorMessage": errorInfo});
      
    //    }
}