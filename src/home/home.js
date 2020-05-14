import React, { Component } from 'react';
import Search from './search';
import Header from '../component/Header'
import Parts from '../component/PartDetails'
import Inlet from '../assest/inlet.jpg'
import Outlet from '../assest/outlet.jpg'
import CartPage from '../component/CartPage';
import '../component/Header.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Home extends Component {
constructor(props) {
    super(props);
    console.log("userDetail in home: " + props.userDetail.userDetail.name);
    this.state=props.userDetail;
}

render() {
    return (
<div>

<Router>
<Header company_details={<p>Autozone<br/>#123 landmark</p>} store_details={<p>All in one Store<br/>#987 landmark</p>}/>
<div className='arrange-horizontally' >
<Link to="/MyCart">CART</Link>
<Link to="/home">HOME</Link>
</div>
<Route exact path='/MyCart' component={CartPage} />
<Route exact path='/home' 
component={Parts}
 ></Route>
</Router>
    



    {/* 
    <Search/>
    <h4>Ordering Address </h4>
    <p>{this.state.userDetail.name}</p>
    <p>{this.state.userDetail.address}</p>
    <h4>Frequently Ordered Items </h4>
    <div>
    <img src={Inlet} alt="Logo" />
    <img src={Outlet} alt="Logo" />
    </div>
    <h4>Privilage status </h4>
    <p>Your privilage status is Diamond</p> */}
</div>

    );
}
}