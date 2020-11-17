import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../actions/authActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "../components/Nav";
import StartButton from "../components/StartButton";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Fade from 'react-reveal/Fade';
import "./style.css";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            console.log("ComponentDidMount");
            console.log(this.props.auth.user.id);
            getUser(this.props.auth.user.id)
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.auth.isAuthenticated) {
            console.log("Derived State");
            console.log(props.auth.user.id);
            getUser(props.auth.user.id)
            return;
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <div id="hero">
                    <Container fluid>
                        <Row>
                            <Col lg={6}>
                                {/* <h1><img src={process.env.PUBLIC_URL + "./assets/transIcon.png"} alt="POC-IT" /></h1> */}
                                <h1>POC-IT</h1>
                                <h2>Say hi to personalized, point of care support all within your pocket</h2>
                                <div>
                                    <StartButton link="/login" label="Get Started" />
                                </div>
                            </Col>
                            <Col lg={6} className="hero-img">
                                <img src={process.env.PUBLIC_URL + "/assets/hero.png"} className="animated" alt="provider and patient" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="wave-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#091330" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,106.7C480,139,600,213,720,202.7C840,192,960,96,1080,74.7C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div id="about">
                    <Container fluid>
                        <Row>
                            <Col md={12}>
                                <h5>We see a day when</h5>
                                <h2>A person with any health condition can manage their own health at home with minimal risk of infection.</h2>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={12}>
                                <h5>To get there, we're making it easier for patients to navigate their home care regimen</h5>
                            </Col>
                        </Row>
                        <Fade bottom>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/connect.png"} />
                                <Card.Body>
                                    <Card.Title>We help providers set up their patients at home</Card.Title>
                                    <Card.Text>
                                        Providers can select which home care regimen is needed for the patient (e.g. Wound Care). POC-IT displays the home care regimen in an easy-to-understand way for patients.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/steps.png"} />
                                <Card.Body>
                                    <Card.Title>We help patients with their regimen</Card.Title>
                                    <Card.Text>
                                        Each home care regimen provides simplified, step-by-step procedures that patients or patient caretakers can follow along with when performing their care.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/assets/hand.png"} />
                                <Card.Body>
                                    <Card.Title>We help minimize infection risk</Card.Title>
                                    <Card.Text>
                                    Patients or caretakers can advance to the next step during procedures with hand gestures to minimize risk of introducing contaminants and pathogens to sensitive areas like wounds or the urinary tract. No need to leave any sterile or clean field.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>

                        </Fade>
                    </Container>
                </div>
            </div>

        )
    }
}

Home.propTypes = {
    getUser: PropTypes.func,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    user: state.user
});

export default connect(mapStateToProps)(Home);
