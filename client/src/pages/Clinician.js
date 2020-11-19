import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
import PatientCard from "../components/PatientCard";
import "./style.css";

function Clinician() {
    const user = useSelector(state => state.user.user);
    return (
        <div>
            <AppBar />
            <div className="block">
                <Container fluid>
                    <h1>{user.name}</h1>
                    <h2>Here are your patients</h2>
                    {user.currentPatients.map((patient, index) => <PatientCard key={index + 1} title={patient.name} text={patient.email} link="/treatment" />)}
                </Container>
            </div>
        </div>
    )
}

export default Clinician;
