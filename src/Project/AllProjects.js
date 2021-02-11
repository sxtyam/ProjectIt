import React from 'react';
import { Component } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { findByPlaceholderText } from '@testing-library/react';
import CardProject from './CardProject';
import './AllProject.css';
import Navbar from '../Common/Navbar';
import { Container } from 'react-bootstrap';

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
    return (
      <div className="allProjSec">
        <Navbar />
        <Container className="container">
          {this.state.projects.map(item =>
            <CardProject project={item} />
          )}
        </Container>
      </div>
    )
  }
}

export default withRouter(AllProjects);