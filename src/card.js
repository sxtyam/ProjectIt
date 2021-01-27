import React from 'react';
import { Card } from 'react-bootstrap';

const card = (props) => {
    return (
        <Card className="display-card" style={{ width: "18rem" }}>
          <Card.Img className="trans" variant="top" src={`./images/${props.img}.jpg`} />
          <Card.Body>
            <Card.Title className="display-4 head">{props.title}</Card.Title>
          </Card.Body>
        </Card>
    )
}

export default card;