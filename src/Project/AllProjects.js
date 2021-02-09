import React from 'react';
import { Component } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { findByPlaceholderText } from '@testing-library/react';
import CardProject from './CardProject';

class AllProjects extends Component {
  state = {
    projects: []
  }

  fetchData = async field => {
    let response = await fetch('http://localhost:5000/project/' + field + '/all', {
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json())
    .then((response) => {
      this.setState({
        projects: response
      })
      console.log(this.state);
    })
  }

  componentDidMount() {
    const field = this.props.match.params.field;
    console.log(field);
    this.fetchData(field);
  }

  render() {
    // let card = null;
    // this.state.projects.forEach(item => 
    //   <CardProject project = {item} />
    // )
    return (
      <div>
        <h1>Hello World!</h1>
        {this.state.projects.map(item => 
          <CardProject project = {item} />
        )}
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default withRouter(AllProjects);