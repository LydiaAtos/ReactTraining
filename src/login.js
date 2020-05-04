import React from 'react';
import './Login.css';

function Login() {
    return(
    <div className="div">
        <br/>
        <p>UserName  <input type="text"></input> </p> 
        <p>Password  <input type="text"></input> </p> 
        <button onclick="myFunction()">Submit</button>
        <br/>
        <br/>
    </div>
    );
}

export default Login