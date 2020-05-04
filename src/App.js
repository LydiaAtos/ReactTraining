import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login'
import Welcome from './welcome';
import Employee from './Employee'

function App() {
  return (
    <div className="App">
      <Login/>
      <br/>
      <br/>
      <Employee/>
    </div>
  );
}

export default App;
