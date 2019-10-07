import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './App.css';
import Sidebar from './Sidebar';
import CourseArea from './CourseArea';
import Cart from './Cart';
import CourseInfo from './CourseInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: {},
      filteredCourses: {},
      subjects: [],
      currCourse: {},
      addedItems: {}
    };
  }

  componentDidMount() {
    fetch('https://mysqlcs639.cs.wisc.edu:5000/classes').then(
      res => res.json()
    ).then(data => this.setState({allCourses: data, filteredCourses: data, subjects: this.getSubjects(data)}));
  }

  getSubjects(data) {
    let subjects = [];
    subjects.push("All");

    for(const course of Object.values(data)) {
      if(subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }

    return subjects;
  }

  setCourses(courses) {
    this.setState({filteredCourses: courses})
  }

  setCurrCourse(data) { 
    this.setState({currCourse:data});
  }

  sendToCart(data) {
    
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <Tabs defaultActiveKey="courseSearch" id="tabs">
        <Tab eventKey="courseSearch" title="Course Search">
          <Sidebar setCourses={(courses) => this.setCourses(courses)} courses={this.state.allCourses} subjects={this.state.subjects}/>
          <div style={{marginLeft: '20vw'}}>
            <CourseArea data={this.state.filteredCourses} setCurrCourse={(data)=> this.setCurrCourse(data)}/>
          </div>
          <div style={{marginLeft: '48vw', marginTop: '-101vw'}}>
            <CourseInfo data={this.state.currCourse}> </CourseInfo>
          </div>
        </Tab>
        <Tab eventKey="cart" title="My Cart">
          <Cart data={this.state.addedItems}> </Cart>
        </Tab>
        </Tabs>
        
      </>
    )
  }
}

export default App;
