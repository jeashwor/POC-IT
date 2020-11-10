import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "../components/nav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";

function Login() {
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
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
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

export default Login;
