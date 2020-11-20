import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


class ProviderForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/provider")
    }
  }

  static getDerivedStateFromProps(props, state) {
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
    const newUser = {
      name: (this.state.firstName + " " + this.state.lastName),
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      isProvider: true
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Form noValidate onSubmit={this.onSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>First name</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.firstName}
              error={errors.firstName}
              id="firstName"
              type="text"
              placeholder="First name"
              className={classnames("", {
                invalid: errors.name
              })}
            />
            <span className="red-text">{errors.name}</span>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.lastName}
              error={errors.lastName}
              id="lastName"
              type="text"
              placeholder="Last name"
              className={classnames("", {
                invalid: errors.name
              })}
            />
            <span className="red-text">{errors.name}</span>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="text" 
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              placeholder="email@email.com" 
              className={classnames("", {
                invalid: errors.email
              })}
              />
              <span className="red-text">{errors.email}</span>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Password</Form.Label>
            <Form.Control
             onChange={this.onChange}
             value={this.state.password}
             error={errors.password}
             id="password"
             type="password"
             placeholder="Password"
             className={classnames("", {
              invalid: errors.password
            })}
          />
          <span className="red-text">{errors.password}</span>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              placeholder="Confirm Password"
              className={classnames("", {
                invalid: errors.password2
              })}
            />
            <span className="red-text">{errors.password2}</span>
          </Form.Group>
        </Form.Row>
        <Button type="submit" id="any-btn">Submit</Button>
      </Form>
    );
  }
}

ProviderForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  user: state.user
});

export default connect(
  mapStateToProps,
  { registerUser }
 )(withRouter(ProviderForm));