import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default class PartDetails extends Component {
constructor()
{
    super();
    this.state = {
        "partsDetails": [{
                "name": "brake wire",
                "type": "durable"
            },
            {
                "name": "battery",
                "type": "light weight"
            },
            {
                "name": "bike seat cover",
                "type": "thick"
            }
    
    
        ]
    };
}

render() {
    return(
       
    <div>
         <h3>Part Details</h3>
{this.state.partsDetails.map((item) => {
    // return <p>Part Name : {item.name} Part Type : {item.type}</p>


  return <Accordion defaultActiveKey="0">
    <Card>
         <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
               </Accordion.Toggle>
       </Card.Header>
       <Accordion.Collapse eventKey="0">
             <Card.Body><p>Part Name : {item.name} Part Type : {item.type}</p></Card.Body>
       </Accordion.Collapse>
</Card>
</Accordion>


})}
    </div>
    );
}

}