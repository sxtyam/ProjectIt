import React from "react";

import "./Home.css";
import Navbar from "./Common/Navbar";
import ml from './images/machineLearning.jpg';
import python from './images/python.jpg';
import Footer from './Common/Footer';
import Card from "./card";
// import AllProjects from "./Project/AllProjects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{backgroundColor: "#dfeae9"}} className="card-showCase">
        <Card title="Machine Learning" img="ml" />
        <Card title="Python" img="python" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
