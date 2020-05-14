import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export default class CartPage extends Component {
    data = require('../assest/orderdetail.json');
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <>
            {this.data.map(orderedpart => {
               return <Card>
                <p>{orderedpart.name}</p>
                <p>{orderedpart.type}</p> 
                <p>Count : <input type="text" value={orderedpart.count}></input>   </p>
                </Card>
            })}
                
            </>
        );
    }
}