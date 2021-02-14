import React from 'react';
import { Card } from 'react-bootstrap';
import ml from './images/machineLearning.jpg';
import python from './images/python.jpg';
import appd from './images/appd.jpg';
import webd from './images/webd.jpg';
import ai from './images/ai.jpg';

const item = {
  "ml": ml,
  "python": python,
  "appd": appd,
  "webd": webd,
  "ai": ai
}

const card = (props) => {

    console.log(props.img)
    return (
        <Card className="display-card" style={{ width: "25rem" }}>
          <Card.Img className="trans" variant="top" src={item[props.img]} />
          <Card.Body>
            <Card.Title className="display-4 head">{props.title}</Card.Title>
          </Card.Body>
        </Card>
    )
}

export default card;