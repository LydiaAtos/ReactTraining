import React, { Component } from 'react';
import Search from './search';
import Header from '../component/Header'
import Parts from '../component/PartDetails'
import Inlet from '../assest/inlet.jpg'
import Outlet from '../assest/outlet.jpg'

export default class Home extends Component {
constructor(props) {
    super(props);
    console.log("userDetail in home: " + props.userDetail.userDetail.name);
    this.state=props.userDetail;
}

render() {
    return (
<div>


<Header company_details="Demo Company" store_details="Demo Store"/>
<Parts />


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