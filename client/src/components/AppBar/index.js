import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./style.css";

class AppBar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <nav className="navbar navbar-expand">
        <Link className="navbar-brand logo" to="/">
          {/* <img src="./assets/headerIcon.png" alt="logo name" /> */}
          <img id="logo" src="./assets/pocit.png" alt="logo name" />
        </Link>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item app-item">
              <Link
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                <FaHome />
              </Link>
            </li>
            <li className="nav-item app-item">
              <Link
                onClick={this.onLogoutClick}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                <FaSignOutAlt />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

AppBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  // add user prop for logout
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AppBar);
