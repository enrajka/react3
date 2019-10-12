import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        this.props.display
    )
  }
  
}

export default Cart;