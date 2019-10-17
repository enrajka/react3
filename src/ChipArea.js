import React from 'react';
import Chip from './Chip';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ChipArea extends React.Component {
  
  getChips() {
    let chips =[];
    for(const tag of Object.values(this.props.chips)) {
      chips.push(<Chip key={tag} title={tag} removeTag={this.props.removeTag}/>);
    }
    return chips;
  }
  
  render() {
    return <Card style={{display: 'flex'}}>
    {this.getChips()}</Card>
  }
}

export default ChipArea;