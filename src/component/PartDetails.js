import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

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


componentDidMount() {
    axios.get(`/api/parts`)
      .then(res => {
        const persons = res.data;
        this.setState(persons);
        console.log("api call " + JSON.stringify(persons));
      })
  }

config = JSON.stringify({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
  });
  data = {
    "partName" : "head light"
  };

 orderParts = () => {
axios.post('api/order', this.data, this.config)
.then(
      res => {
          console.log(JSON.stringify(res));
          alert(res.data.orderStatus);
      }
  )
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
             <Card.Body><p>Part Name : {item.name} 
             Part Type : {item.type} 
             <img src={item.imageURL} alt='image not avaialble' />
             <Button variant="dark" onClick={this.orderParts}>Order</Button></p>
             </Card.Body>
       </Accordion.Collapse>
</Card>
</Accordion>


})}
    </div>
    );
}

}