import React from 'react';
import './App.css';
import App from './App';
import AreasOfInterest from './AreasOfInterest';
import PrevCourseArea from './PrevCourseArea';
import RecomCourses from './RecomCourses';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevCourses: []
    };
  }

  componentDidMount() {
    fetch('https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completed/').then(
      res => res.json()
    ).then(data => this.setState({prevCourses: data}));
  }

  
  render() {
    return (
      <>
        <div style={{flex: 1}}>
            <PrevCourseArea data={this.state.prevCourses}/>
        </div>
            <div style={{flex: 1}}>
        <AreasOfInterest/>
         </div>
        <div style={{flex: 1}}>
            <RecomCourses/>
        </div>
      </>
    )
  }
}

export default Recommend;