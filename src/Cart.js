import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log("in cart", this.props.data);
    
    return (
        <Card style={{width: '98%', marginTop: '5px', marginLeft: '5px', marginBottom: '5px'}}>
            <Card.Body>
                <Card.Title>Courses in Your Cart</Card.Title>
                <Card.Subtitle>hi</Card.Subtitle>
            </Card.Body>
        </Card>
    )
  }
  
}

export default Cart;