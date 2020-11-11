import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "../components/Nav";
import StartButton from "../components/StartButton";
import "./style.css";

function Home() {
    return (
        <div>
            <Nav />
            <div id="hero">
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <h1>POC-IT</h1>
                            <h2>Say hi to personalized, point of care healthcare all within your pocket</h2>
                            <div>
                                <StartButton link="/login" label="Get Started"/>
                            </div>
                        </Col>
                        <Col lg={6} className="hero-img">
                            <img src={process.env.PUBLIC_URL + "/assets/hero.png"} className="animated" alt="provider and patient" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Home;
