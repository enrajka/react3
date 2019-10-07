import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

class CourseInfo extends React.Component {
    constructor(props) {
        super(props);
    }
   
    sendInfo (props) {
        console.log(this.props.data);
    }

    

    getListG() {
        let listG = [];
        //console.log(this.props.data.sections);
        if (this.props.data.sections != undefined) {
            let sec = Object.keys(this.props.data.sections);
            let secBody = Object.values(this.props.data.sections);
             console.log(secBody);
            // console.log(sec[0]);
            // console.log(sec.length);           
            // //listG.push(<ListGroup.Item>{sec[i]}</ListGroup.Item>);
            for (var i = 0; i < sec.length; i++) {
                listG.push(<Card><Accordion.Toggle as={Card.Header} eventKey="0">{sec[i]}</Accordion.Toggle><Accordion.Collapse eventKey="0"><Card.Body>{this.getBody()}</Card.Body></Accordion.Collapse></Card>);
            }
            return listG;

            // <Card>
            //     <Accordion.Toggle as={Card.Header} eventKey="0">{sec[i]}</Accordion.Toggle>
            //             <Accordion.Collapse eventKey="0">
            //             <Card.Body>Hello! I'm the body</Card.Body>
            //             </Accordion.Collapse>
            // </Card>
        } 
        return "";
    }

    getSubTitle () {
        if (this.props.data.sections != undefined) {
            return this.props.data.number + " : " + this.props.data.credits + " credits";
        } 
        return "";
    }

   render () {

       return (
           <Card>
                <Card.Title>{this.props.data.name}</Card.Title>
                <Card.Subtitle>{this.getSubTitle()}</Card.Subtitle>
                <Card.Text>{this.props.data.description}</Card.Text>
                <Accordion defaultActiveKey="0">
                    {this.getListG()}
                </Accordion>
           </Card>
            
       )
   }
  
}

export default CourseInfo;
