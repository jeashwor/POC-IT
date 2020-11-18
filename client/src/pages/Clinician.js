import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
import PatientCard from "../components/PatientCard";
import "./style.css";

function Clinician(props) {
    return (
        <div>
            <AppBar />
            <div className="block">
                <Container fluid>
                    <h1>{props.user.user.name}</h1>
                    <h2>Here are your patients</h2>
                    {/* from get(api/users/displaypatients), map & generate patient cards for each of their patients 
                        return (
                            <PatientCard title={patient name} text={patient DOB} link="/treatment" />
                        )
                        remove PatientCard below

                    */}
                    <PatientCard title="Jack Joe" link="/treatment" />
                </Container>
            </div>
        </div>
    )
}

Clinician.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(Clinician);
