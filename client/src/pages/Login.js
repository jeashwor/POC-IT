import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "../components/Nav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/patient")
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.auth.isAuthenticated) {
            props.history.push("/patient");
        }
        if (props.errors) {
            return {
                errors: props.errors
            };
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Nav />
                <div id="hero">
                    <Container fluid>
                        <Row>
                            <Col lg={6}>
                                <h1>Welcome Back</h1>
                                <h2>Let's get you checked-in</h2>
                            </Col>
                            <Col lg={6}>
                                <Form noValidate onSubmit={this.onSubmit}>
                                    <Form.Group >
                                        <Form.Control
                                            type="email"
                                            id="email"
                                            placeholder="Enter email"
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            className={classnames("", {
                                                invalid: errors.email || errors.emailnotfound
                                            })}
                                        />
                                        <span className="red-text">
                                            {errors.email}
                                            {errors.emailnotfound}
                                        </span>
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Control
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            className={classnames("", {
                                                invalid: errors.password || errors.passwordincorrect
                                            })}
                                        />
                                        <span className="red-text">
                                            {errors.password}
                                            {errors.passwordincorrect}
                                        </span>
                                    </Form.Group>
                                    <Button type="submit" id="any-btn">
                                        Submit
                                    </Button>
                                </Form>
                                <br />
                                <p>Or sign up <a href="/signup">here</a></p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
