import React, { Component } from 'react';
import './Header.css'


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Company Details</h2>
                <p>{this.props.company_details}</p>
                <h2>Store Details</h2>
                <p>{this.props.store_details}</p>
            </div>
        );
    }
}