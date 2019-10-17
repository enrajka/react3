import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import SearchAndFilter from './SearchAndFilter';
import ChipArea from './ChipArea';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.searchAndFilter = new SearchAndFilter();
    this.subject = React.createRef();
    this.minimumCredits = React.createRef();
    this.maximumCredits = React.createRef();
    this.search = React.createRef();
    
  }

  setCourses() {
    console.log("the currTags are: ", this.props.currTags);
    this.props.setCourses(this.searchAndFilter.searchAndFilter(this.props.currTags, this.props.courses, this.search.current.value, this.subject.current.value, this.minimumCredits.current.value, this.maximumCredits.current.value));
    this.setChipList(this.searchAndFilter.createChips(this.search.current.value));
    
  }

  handleCreditsKeyDown(e) {
    if(['0','1','2','3','4','5','6','7','8','9','Backspace','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab'].indexOf(e.key) === -1)
      e.preventDefault();
  }

  getSubjectOptions() {
    let subjectOptions = [];

    for(const subject of this.props.subjects) {
      subjectOptions.push(<option key={subject}>{subject}</option>);
    }

    return subjectOptions;
  }
  
  setChipList(data) {
    //console.log("reaching here", data);
    this.props.setTags(data);
    // if (data != "none") {
    //   var currChips = this.state.chipsAdded;
    //   currChips.push(data);
    //   this.setState({chipsAdded: currChips});
    // }
   
  }

  // onChipDelete(chipName) {
  //     console.log("Deleting ", chipName);
  //    // console.log(this.state);
  //     let tempChips = [];
  //     if (this.state != undefined) {
  //       if (chipName != null) {
  //         for (let x = 0; x < this.state.chipsAdded.length; x++) {
  //           if (this.state.chipsAdded[x] !== chipName) {
  //             tempChips.push(this.state.chipsAdded[x]);
  //           }
  //         }
  //         this.setState({chipsAdded: tempChips});
  //       }
  //     }
  // }

  render() {
    return (
      <>
        <Card style={{width: 'calc(20vw - 5px)', marginLeft: '5px', height: 'calc(100vh - 10px)', position: 'fixed'}}>
          <Card.Body>
            <Card.Title>Search and Filter</Card.Title>
            <Form>
              <Form.Group controlId="formKeywords" onChange={() => this.setCourses()} style={{width: '100%'}}>
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" placeholder="Search" autoComplete="off" ref={this.search}/>
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control as="select" ref={this.subject} onClick={() => this.setCourses()}>
                  {this.getSubjectOptions()}
                </Form.Control>
              </Form.Group>

              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Form.Group controlId="minimumCredits" onChange={() => this.setCourses()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                  <Form.Label>Credits</Form.Label>
                  <Form.Control type="text" placeholder="minimum" autoComplete="off" ref={this.minimumCredits}/>
                </Form.Group>
                <div style={{marginLeft: '5px', marginRight: '5px', marginTop: '38px'}}>to</div>
                <Form.Group controlId="maximumCredits" style={{marginTop: '32px'}} onChange={() => this.setCourses()} onKeyDown={(e) => this.handleCreditsKeyDown(e)}>
                  <Form.Control type="text" placeholder="maximum" autoComplete="off" ref={this.maximumCredits}/>
                </Form.Group>
              </div>
            </Form>
            <ChipArea chips={this.props.currTags} removeTag={this.props.removeTag}/>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Sidebar;
