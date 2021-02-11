import React from "react";
import "./Home.css";
import Navbar from "./Common/Navbar";
import Footer from './Common/Footer';
import Card from "./card";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ backgroundColor: "#dfeae9" }} className="card-showCase">
        <Link style={{ textDecoration: "none" }} to="/project/ml/all">
          <Card title="Machine Learning" img="ml" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/project/webd/all">
          <Card title="Web Development" img="webd" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/project/ai/all">
          <Card title="Artificial Intelligence" img="ai" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default App;
