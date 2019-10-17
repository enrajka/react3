import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Cart from './Cart';
import CourseArea from './CourseArea';
import CourseInfo from './CourseInfo';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: {},
      filteredCourses: {},
      currCourse: {},
      addedItems: [],
      currTags: [],
      subjects: []
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

  setCurrCourse(data) { 
    this.setState({currCourse:data});
  }

  setCourses(courses) {
    this.setState({filteredCourses: courses})
  }

  setTags(tag) {
    if (tag != "none" && tag != null) {
      var dontAdd = 0;

      for (let t = 0; t < this.state.currTags.length; t++) {
        if (this.state.currTags[t] === tag) {
          dontAdd = 1;
        }
      }
      if (dontAdd === 0) {
        var currT = this.state.currTags;
        currT.push(tag);
        this.setState({currTags: currT});
      }
      //console.log(this.state.currTags);
    }
  }

  // removeTag(tag) {
  //   let tempItems = [];
  //   for (let t = 0; t < this.state.currTags.length; t++) {
  //     if (this.state.currTags[t] !== tag) {
  //       tempItems.push(this.state.currTags[t]);
  //     }
  //   }
  //   this.setState({currTags: tempItems});
  // }

  setCart(data) {
    if (data != null) {
      var currCart = this.state.addedItems;
      //if (this.state.addedItems.contains)
      console.log("the data being added: ",data);
      var dontAdd = 0;

      //Right now just checks if its already in the cart and if so dont re-add it 
      for (var i = 0; i < this.state.addedItems.length; i++) {
        //check if the course is already in the cart
        if (this.state.addedItems[i].data.name === data.name) {
          dontAdd = 1;
        }
      }

      if (dontAdd === 0) {
        currCart.push({data});
        this.setState({addedItems: currCart});
      }
    }
  }

  removeItem (item) {
    let tempItems = [];
    for (let t = 0; t < this.state.addedItems.length; t++) {
      if (this.state.addedItems[t] !== item) {
        tempItems.push(this.state.addedItems[t]);
      }
    }
    // console.log("this should be all the entries except the removed one", tempItems);
    // console.log("the removed item was", item);
    this.setState({addedItems: tempItems});
  }

  displayCart() {
    let added = [];
    // console.log("curr cart: ", this.state.addedItems);
    // console.log("curr cart length: ", this.state.addedItems.length);
    
    for (let i = 0; i < this.state.addedItems.length; i++) {
      added.push(
        <Card style={{width: '20rem'}}>
        <Card.Body>
            <Card.Title>{this.state.addedItems[i].data.name}</Card.Title>
            <Card.Subtitle>{this.displayBody(i)}</Card.Subtitle>
            <Button variant="dark" size="sm" onClick={() => this.removeItem(this.state.addedItems[i])}>Remove</Button>
        </Card.Body>
        </Card>
      );
    }
    //console.log(added);
    return added;
  }

  displayBody(index) {
    let count = 0;
    let currLect = "";

    if (index != null) {
      //console.log(this.state.addedItems[index].data.sections);
      for (let s = 0; s < this.state.addedItems[index].data.sections.length; s++) {
        if (this.state.addedItems[index].data.sections[s] == null) {
          count++;
        }
      }
      //console.log("count: ",count);
    
      if (count === 0) {
        if (this.state.addedItems[index].data.sections.length == 1){
            currLect = this.state.addedItems[index].data.sections[0];
        } else {
          return "No Lecture Chosen";
        }
      } 
      if (count === (this.state.addedItems[index].data.sections.length - 1) || (currLect.length === 1)) {
        //there is a lecture chosen
        let x = -1;
        if (currLect === "") {
          //console.log("reaching here means that more than one lecture");
          for (let s = 0; s < this.state.addedItems[index].data.sections.length; s++) {
            if (this.state.addedItems[index].data.sections[s] != null) {
              x = s;
            }
          }
          currLect = this.state.addedItems[index].data.sections[x];
        }        
        //console.log("trying to see subsections ", currLect[1].subsections);
        //console.log("now count is the index of the nonnull val which is ", x);
        //console.log("trying to see subsec", this.state.addedItems[index].data.sections[x][1].subsections);
        let count2 = 0;
        for (let sub = 0; sub < currLect[1].subsections.length; sub++) {
          if (currLect[1].subsections[sub] == null) {
            count2++;
          }
        }
        // console.log("count2:", count2);
        // console.log("currLect", currLect[0]);
        if (count2 === 0) {
          return currLect[0];
        } else {
          let z = -1;
        
            //console.log("reaching here means that more than one lecture");
            for (let s = 0; s < currLect[1].subsections.length; s++) {
              if (currLect[1].subsections[s] != null) {
                z = s;
              }
            }
            //console.log(currLect[1].subsections[z][0]);
            return currLect[0] + " : " + currLect[1].subsections[z][0];
        }
      }
    }
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
            <Sidebar setCourses={(courses) => this.setCourses(courses)} courses={this.state.allCourses} subjects={this.state.subjects} setTags={this.setTags.bind(this)}/>
            <div style={{marginLeft: '20vw'}}>
              <CourseArea data={this.state.filteredCourses} setCurrCourse={(data)=> this.setCurrCourse(data)}/>
              <CourseInfo data={this.state.currCourse} setCart={this.setCart.bind(this)}/>
            </div> 
          </Tab> 
          <Tab eventKey="cart" title="My Cart">
              <Cart display={this.displayCart()}/>
          </Tab>
        </Tabs>
      </>
    )
  }
}

export default App;