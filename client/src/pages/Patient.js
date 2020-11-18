import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
// import Nav from "../components/Nav";
import CareButton from "../components/CareButton";
import "./style.css";

function Patient(props) {
    return (
        <div>
            <AppBar />
            <div className="block">
                <Container fluid>
                    <h1>{props.user.user.name}</h1>
                    <h2>Here's your home care regimen</h2>
                    <div>
                        <CareButton image={process.env.PUBLIC_URL + props.user.user.currentProcedures[0].image} title={props.user.user.currentProcedures[0].name} text={props.user.user.currentProcedures[0].description} link="/intro" />
                    </div>
                </Container>
            </div>
        </div>

    )
}

Patient.propTypes = {
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Patient);
