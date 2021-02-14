import React from "react";
import "./Home.css";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import CardShow from "./card";
import { Link } from "react-router-dom";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import Star from "./images/star.png";
import Connect from "./images/connect.png";
import Grow from "./images/grow.png";

function App() {
  return (
    <div style={{ backgroundColor: "#dfeae9" }} className="App">
      <Navbar logout />
      <div className="card-showCase">
        <Link style={{ textDecoration: "none" }} to="/project/ml/all">
          <CardShow title="Machine Learning" img="ml" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/project/webd/all">
          <CardShow title="Web Development" img="webd" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/project/appd/all">
          <CardShow title="App Development" img="appd" />
        </Link>
      </div>
      <hr className="custom-hr" />
      <Container style={{ padding: "20px" }}>
        <h1>FAQs</h1>
      </Container>
      <div className="Question">
        <Accordion>
          <Card.Header
            style={{
              backgroundColor: "white",
              margin: "auto",
              borderRadius: "10px",
            }}
            className="dropQues">
            <h5>
              <b>
                Why PROJ<span style={{ color: "orange" }}>3</span>CT IT?
              </b>
            </h5>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <i class="fas fa-chevron-circle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="ansCard">
              As there are more than enough helping guides for learning data
              structures and algorithms as well for learning concepts
              theoretically, but what about practical implementations of those
              concepts. It is a general human tendency to learn things
              practically, hence PROJ3CT IT helps you to find ideas for projects
              and guidance for implementing them. Also you can contact the
              contributor of the project if you have any doubt related to the
              project or for the source code you can refer GitHub repository of
              that project.
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </div>
      <div className="Question">
        <Accordion>
          <Card.Header
            style={{
              backgroundColor: "white",
              margin: "auto",
              borderRadius: "10px",
            }}
            className="dropQues"
          >
            <h5>
              <b>Why should we add our work here?</b>
            </h5>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <i class="fas fa-chevron-circle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="ansCard">
              <div className="rightImg">
                <p className="answerSec">
                  <br />
                  <h4
                    style={{ borderLeft: "4px solid gold", paddingLeft: "5px" }}
                  >
                    Stars on your repository!
                  </h4>
                  Who does not want stars in the repository? As stars are
                  convincing, they are counter and signal positive feedback for
                  your work. As a user, high star count encourages you to check
                  out one project over another. Beyond the fact that a high star
                  count helps a project stand out, they also impact your
                  GitHub’s recommendations. Now you might think, how will
                  PROJ3CT IT help me with that? The answer is simple, as the
                  link to your github repository will be provided. This will
                  direct the audience to your repository. Complete credits will
                  be given to you for your work!
                </p>
                <img style={{ width: "300px", height: "200px" }} src={Star} />
              </div>
              <div className="rightImg">
                <img
                  style={{ width: "300px", height: "200px" }}
                  src={Connect}
                />
                <p className="answerSec">
                  <br />
                  <br />
                  <h4
                    style={{ borderLeft: "4px solid gold", paddingLeft: "5px" }}
                  >
                    Become a part of larger community!
                  </h4>
                  We aim at creating a community of like-minded people.
                  Contributing to this site will make you a part of this venture
                  wherein your projects and ideas combined with somebody else’s
                  skills will result in mutual benefit. Also the audience can
                  directly pitch you through linkedIn and contact you increasing
                  your network all around.
                </p>
              </div>
              <div className="rightImg">
                <p className="answerSec">
                  <br />
                  <h4
                    style={{ borderLeft: "4px solid gold", paddingLeft: "5px" }}
                  >
                    Grow as a community!
                  </h4>
                  Getting people to contribute to your projects is indeed tough!
                  You would eventually get enthusiastic developers to enhance
                  your project .On the other hand your knowledge would Also get
                  brushed up by explaining your project doubts to them, which
                  results in mutual growth of our wonderful community. If
                  everyone is moving forward together, then success takes care
                  of itself.
                </p>
                <img style={{ width: "300px", height: "200px" }} src={Grow} />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </div>
      <div className="Question">
        <Accordion>
          <Card.Header
            style={{
              backgroundColor: "white",
              margin: "auto",
              borderRadius: "10px",
            }}
            className="dropQues"
          >
            <h5>
              <b>How can we contact the project developer?</b>
            </h5>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <i class="fas fa-chevron-circle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="ansCard">
              The beneficiary can have a look at the profile of the contributor,
              where LinkedIn/Github links of the contributor (if provided) are
              available. LinkedIn is considered to be the best source to get
              your queries answered. Also for code specific queries, you can
              have a look at the source code, through the GitHub repository link
              and you can have an one on one interaction with the developer
              which would enhance your developing skills.
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}

export default App;
