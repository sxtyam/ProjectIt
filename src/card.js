import React from 'react';
import { Card } from 'react-bootstrap';
import ml from './images/machineLearning.jpg';
import python from './images/python.jpg';

const item = {
  "ml": ml,
  "python": python
}

const card = (props) => {

    console.log(props.img)
    return (
        <Card className="display-card" style={{ width: "18rem" }}>
          <Card.Img className="trans" variant="top" src={item[props.img]} />
          { /*<Card.Img className="trans" variant="top" src={ml} /> */}
          <Card.Body>
            <Card.Title className="display-4 head">{props.title}</Card.Title>
          </Card.Body>
        </Card>
    )
}

export default card;