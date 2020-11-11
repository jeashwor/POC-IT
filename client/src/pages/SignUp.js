import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "../components/nav";
import Form from 'react-bootstrap/Form';
import PatientForm from "../components/PatientForm";
import ProviderForm from "../components/ProviderForm";
import "./style.css";

function SignUp() {
    const [role, setrole] = useState("");
    let formRender;

    const handleInputChange = event => {
        setrole(event.target.value);
    };

    if (role) {
        if (role === "Patient or Patient Caretaker") {
            formRender = <PatientForm />
        } else {
            formRender = <ProviderForm />
        }
    } 

    return (
        <div>
            <Nav />
            <div id="hero">
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <h1>We're glad you're here</h1>
                            <h2>Before we get started, help us get to know you</h2>
                        </Col>
                        <Col lg={6}>
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>What's your role</Form.Label>
                                    <Form.Control as="select" defaultValue={'DEFAULT'} onChange={handleInputChange}>
                                        <option value="DEFAULT" disabled>Choose here</option>
                                        <option>Patient or Patient Caretaker</option>
                                        <option>Provider</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            {formRender}
                            <br />
                            <p>Or login <a href="/login">here</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default SignUp;
