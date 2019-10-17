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
    this.state = {
      currTags: []
    };
  }

  setCourses() {
    //console.log("the currTags before are: ", this.state.currTags);
    this.setChipList(this.searchAndFilter.createChips(this.search.current.value));
    console.log("the currTags after are: ", this.state.currTags);
    this.props.setCourses(this.searchAndFilter.searchAndFilter(this.state.currTags, this.props.courses, this.search.current.value, this.subject.current.value, this.minimumCredits.current.value, this.maximumCredits.current.value));
    
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
    if (data != "none" && data != null) {
      // var currChips = this.state.currTags;
      // currChips.push(data);
      // this.setState({currTags: currChips});
      var dontAdd = 0;

      for (let t = 0; t < this.state.currTags.length; t++) {
        if (this.state.currTags[t] === data) {
          dontAdd = 1;
        }
      }
      if (dontAdd === 0) {
        var currT = this.state.currTags;
        currT.push(data);
        this.setState({currTags: currT});
      }
    }
    // console.log(this.state.currTags);
  }

  removeTag(tag) {
    let tempItems = [];
    console.log(this.state.currTags.length);
    for (let t = 0; t < this.state.currTags.length; t++) {
      console.log(this.state.currTags[t] +" !== " + tag);
      if (this.state.currTags[t] !== tag) {
        tempItems.push(this.state.currTags[t]);
      }
    }
    // console.log("tempItems ", tempItems);
    // console.log("before delete:",this.state.currTags);
    //this.setState({currTags: tempItems});
    this.state.currTags = tempItems;
    //this.setState({currTags: tempItems});
    // console.log("after delete:",this.state.currTags);
  }

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
            <ChipArea chips={this.state.currTags} removeTag={this.removeTag.bind(this)}/>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Sidebar;
