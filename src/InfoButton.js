import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import CourseInfo from './CourseInfo';

class InfoButton extends React.Component {
   constructor (props) {
    super(props);
    this.state = {
        GetButtonText: this.props.GetButtonText,
        GetButtonStyle: "btn btn-info",
        GetButtonPressed: false,
        GetButtonMoreInfo: this.props.GetButtonMoreInfo,
        
    };
   }


   changeButtonState() {
    this.state.GetButtonPressed ?
    this.setState({ GetButtonPressed: false }) : this.setState({ GetButtonPressed: true })
    this.props.setCurrCourse(this.props.GetButtonMoreInfo);
  }

  getCourseInfo() {
    //console.log(this.props.GetButtonMoreInfo);
    return (
        <Card style={{marginLeft: '48vw', marginTop: '-201vw'}}>
            <Card.Body>
              <Card.Title>{this.props.GetButtonMoreInfo.name}</Card.Title>
              <Card.Subtitle>{this.props.GetButtonMoreInfo.number} - {this.props.GetButtonMoreInfo.credits}</Card.Subtitle>
              <Card.Text>{this.props.GetButtonMoreInfo.description}</Card.Text>
            </Card.Body>
        </Card> 
        );
  }

  render() {
    return(
        <button className={this.state.GetButtonStyle} onClick={(this.changeButtonState.bind(this))}>{this.state.GetButtonText}</button>
    );
  }
  
}

export default InfoButton;
