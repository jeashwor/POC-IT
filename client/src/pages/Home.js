import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../actions/authActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "../components/Nav";
import StartButton from "../components/StartButton";
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

    render() {
    return (
        <div>
            <Nav />
            <div id="hero">
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <h1><img src={process.env.PUBLIC_URL + "./assets/transIcon.png"} alt="POC-IT" /></h1>
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

    )};
}

Home.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    user: state.user
});

export default connect(mapStateToProps)(Home);
