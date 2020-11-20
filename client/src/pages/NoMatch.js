import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StartButton from "../components/StartButton";
import AppBar from "../components/AppBar";
import "./style.css";

function NoMatch() {
  return (
    <div>
      <div id="hero">
        <AppBar />
        <Container fluid>
          <Row>
            <Col lg={6}>
              <h1>Page Not Found</h1>
              <h2>Let's take you back home</h2>
              <div>
                <StartButton link="/" label="Go Home" />
              </div>
            </Col>
            <Col lg={6} className="hero-img">
              <img src={process.env.PUBLIC_URL + "/assets/notfound.png"} className="animated" alt="provider and patient" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#091330" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,106.7C480,139,600,213,720,202.7C840,192,960,96,1080,74.7C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </div>
  );
}

export default NoMatch;
