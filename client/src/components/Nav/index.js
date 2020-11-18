import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { FaEllipsisV } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 576) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm" id="navbar-custom">
        <Link className="navbar-brand" to="/">
          {/* <img src="./assets/headerIcon.png" alt="logo name" /> */}
          <img id="logo" src="./assets/pocit.png" alt="logo name" />
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaEllipsisV />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item menu-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item menu-item">
              <ScrollLink
                onClick={this.toggleNav}
                className={window.location.pathname === "/#about" ? "nav-link active" : "nav-link"}
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={200}
              >
                About
              </ScrollLink>
            </li>
          </ul>
          <div className="logout">
          <a href="/" onClick={this.onLogoutClick} className="logoutBtn">Logout</a>
        </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
) (Nav);
