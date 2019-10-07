import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class Cart extends React.Component {
  render() {
    return (
        <Card style={{width: '98%', marginTop: '5px', marginLeft: '5px', marginBottom: '5px'}}>
            <Card.Body>
                <Card.Title>Courses in Your Cart</Card.Title>
                <Card.Subtitle>{this.props.data.name}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
  }
  
}

export default Cart;
