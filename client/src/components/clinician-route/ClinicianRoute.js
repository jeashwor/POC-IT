import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ClinicianRoute = ({ component: Component, auth, user, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth.isAuthenticated === true && user.user.isProvider === true ? (
                <Component {...props} />
            ) : ( 
                 <Redirect to="/" />
            )}
    />
);

ClinicianRoute.propTypes = {
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user
});

export default connect(mapStateToProps) (ClinicianRoute);