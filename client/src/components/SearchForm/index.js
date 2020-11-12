import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

function SearchForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="text-center">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row className="justify-content-center">
          <Form.Group as={Col} md="4">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback type="invalid">
              Enter patient last name
          </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Form.Group as={Col} md="4" >
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" required />
            <Form.Control.Feedback type="invalid">
              Enter patient DOB.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit" id="any-btn">Search</Button>
      </Form>
    </div>
  );
}

export default SearchForm;