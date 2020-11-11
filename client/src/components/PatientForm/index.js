/* eslint-disable no-restricted-globals */
import React, { useState, useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import {GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../../utils/actions";
import API from "../../utils/API";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

function PatientForm(props) {
  const [validated, setValidated] = useState(false);
  const [state, dispatch] = useStoreContext();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    dispatch({ type: USER_LOADING });
    API.createPatient({
      name: firstNameRef.current.value,
      email: emailRef.current.value,
      dob: dobRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value
    }).then(res => props.history.push("/login"))
    .catch(err => {
      dispatch({ 
        type: GET_ERRORS,
         });
      console.log(err);
    })
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            ref={firstNameRef}
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type="invalid">
            Enter your first name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            ref={lastNameRef}
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback type="invalid">
            Enter your last name
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="email@email.com" required ref={emailRef} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" required ref={dobRef} />
          <Form.Control.Feedback type="invalid">
            Please provide your DOB.
            </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            Please enter password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            ref={password2Ref}
            type="password"
            placeholder="Confirm Password"
          />
          <Form.Control.Feedback type="invalid">
            Please confirm password.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit" id="any-btn">Submit</Button>
    </Form>
  );
}

export default withRouter(PatientForm);