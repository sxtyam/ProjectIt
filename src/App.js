import React from "react";

import "./App.css";
import Navbar from "./navbar";
import ml from './images/machineLearning.jpg';
import python from './images/python.jpg';
import Card from "./card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-showCase">
        <Card title = "Machine Learning" img = "machineLearning" />
      </div>
    </div>
  );
}

export default App;
