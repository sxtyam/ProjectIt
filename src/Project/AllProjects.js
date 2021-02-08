import React from 'react';
import { Component } from 'react';
import { Card } from 'react-bootstrap';

class allProjects extends Component {
  state = {
    projects: []
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/project/' + this.props.field + '/all', {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then((response) => {
      this.setState({
        projects: response.map(item => ({
            project: item.project,
            userName: item.userName,
            linkedIn: item.linkedIn
        }))
      })
      console.log(this.state);
    })
  }

  render() {
    return(
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default allProjects;