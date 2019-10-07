import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class CourseInfo extends React.Component {
    constructor(props) {
        super(props);
    }
   
    sendInfo (props) {
        console.log(this.props.data);
    }

    getSubTitle () {
        return this.props.data.number + "-" + this.props.data.credits + " credits";
    }

    getListG() {
        let listG = [];
        //console.log(this.props.data.sections);
        if (this.props.data.sections != undefined) {
            let sec = Object.keys(this.props.data.sections);
            // console.log(sec);
            // console.log(sec[0]);
            // console.log(sec.length);           
            for (var i = 0; i < sec.length; i++) {
                 listG.push(<ListGroup.Item>{sec[i]}</ListGroup.Item>);
            }
            return listG;
        } 
        return "";
        // if (this.props.data != undefined) {
        //     let listG = {};
        //     for (var i = 0; i < this.props.data.sections.length; i++) {
        //         listG.push(<ListGroup.Item>{this.props.data.sections[i]}</ListGroup.Item>);
        //     }
        //     return listG;
        // }
        // return "";
    }

   render () {

       return (
           <Card>
                <Card.Title>{this.props.data.name}</Card.Title>
                <Card.Subtitle>{this.props.data.number} : {this.props.data.credits} credits</Card.Subtitle>
                <Card.Text>{this.props.data.description}</Card.Text>
                <ListGroup variant="flush">
                    {this.getListG()}
                </ListGroup>
           </Card>
            
       )
   }
  
}

export default CourseInfo;
