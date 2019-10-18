import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';

class PrevCourseArea extends React.Component {
    getTitle() {
        console.log(this.props.data);
    }
    render() {
        return (
            <Card>
                <Card.Title>{this.props.data.data}</Card.Title>
            </Card>
        );
    }
}

export default PrevCourseArea;