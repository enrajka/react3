import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

class CourseInfo extends React.Component {
    constructor(props) {
        super(props);

    }
   
       
    getListG() {
        let listG = [];
        //console.log(this.props.data.sections);
        if (this.props.data.sections != undefined) {
            let sec = Object.keys(this.props.data.sections);
            let secBody = Object.values(this.props.data.sections);
            for (var i = 0; i < sec.length; i++) {
                listG.push(<Card><Accordion.Toggle as={Card.Header} eventKey={i}>{sec[i]}</Accordion.Toggle><Accordion.Collapse eventKey={i}><Card.Body>{this.getBody(secBody[i])}<Card.Text>{this.getTimes(secBody[i])}</Card.Text>{this.getButton(sec[i])} {this.getTagS(secBody[i])}</Card.Body></Accordion.Collapse></Card>);
            }
            return listG;
        } 
        return "";
    }

    getSubTitle () {
        if (this.props.data.sections != undefined) {
            return this.props.data.number + " : " + this.props.data.credits + " credits";
        } 
        return "";
    }

    getBody (data) {
        var s = data.instructor + " : " + data.location;
        return s;
    }

    getButton (element) {
        return <Button className="addToCart" onClick={()=>this.addToCart(element)}>Add To Cart</Button>;
    }

    getSButton (element) {
       console.log(element);
       return <Button className="addToCart" onClick={()=>this.addToCart(element)}>Add To Cart</Button>;
    }

    addToCart () {
        this.props.setCart(this.props.data);
        
    }

    getTimes(data) {
        let day = Object.keys(data.time);
        let time = Object.values(data.time);
        var s = "";
        for (var i = 0; i < day.length; i++) {
            s += (day[i].charAt(0).toUpperCase() + day[i].slice(1)) + "\t" + time[i] + "\n";
        }
        return s;
    }

    // getSBody (data) {
    //     var s = data.location;
    //     return s;
    // }

    getTagS (data) {
        let subs = Object.keys(data.subsections);
        if (subs.length > 0) {
            return <Accordion defaultActiveKey="0">{this.getSubSection(data)}</Accordion>;
        }
        return "";
    }


    getSubSection(data) {
        if (data != undefined) {
            let listS = [];
            let subs = Object.keys(data.subsections);
            let subBody = Object.values(data.subsections);
            let subsec = Object.entries(data.subsections);

            if (subs.length > 0) {
                for (var i = 0; i < subs.length; i++) {
                    listS.push(<Card><Accordion.Toggle as={Card.Header} eventKey={i}>{subs[i]}</Accordion.Toggle><Accordion.Collapse eventKey={i}><Card.Body>{subBody[i].location}<Card.Text>{this.getTimes(subBody[i])} {this.getSButton(subsec[i])}</Card.Text></Card.Body></Accordion.Collapse></Card>);
                }
                return listS;
            }
        }
        return "";
    }

   render () {

       return (
           <Card>
                <Card.Title>{this.props.data.name}</Card.Title>
                <Card.Subtitle>{this.getSubTitle()}</Card.Subtitle>
                <Card.Text>{this.props.data.description} {this.getButton(this.props.data)}</Card.Text>
                <Accordion defaultActiveKey="0">
                    {this.getListG()}
                </Accordion>
           </Card>
            
       )
   }
  
}

export default CourseInfo;
