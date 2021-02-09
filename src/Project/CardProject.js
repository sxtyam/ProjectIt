import React from "react";
import { Card, Button } from "react-bootstrap";

const cardProject = (props) => {

  if (props.project.description.length > 100){
      props.project.description = props.project.description.substr(0, 100) + "...";
  }
  
  return (
    <Card>
      <Card.Header as="h5">{props.project.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {props.project.description}
        </Card.Text>
        <Button variant="outline-primary">View</Button>
      </Card.Body>
    </Card>
  );
};

export default cardProject;
