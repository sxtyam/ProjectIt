import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const cardProject = (props) => {
  if (props.project.description.length > 100) {
    props.project.description =
      props.project.description.substr(0, 100) + "...";
  }

  console.log("This is id" + props.project._id);
  const loc = "/project/" + props.project._id;
  console.log(loc);

  return (
    <Card className="projectBox">
      <Card.Header as="h5">{props.project.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.project.description}</Card.Text>
        <Link target="_blank" to={loc}>
          <Button className="buttonGradient" variant="outline-dark">View</Button>
        </Link>
        <div className="view">
          <i class="fas fa-eye"></i>
          <span className="viewNumber">{props.project.views}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default cardProject;
