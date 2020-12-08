import React from "react";
import { Link } from "react-router-dom";
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
                    {user.currentPatients.map((patient, i) => 
                    (<Link 
                        key={i} 
                        to={{
                        pathname: '/treatment',
                        user: patient.name,
                        email: patient.email
                        }}>
                            <PatientCard title={patient.name} text={patient.email} />
                    </Link>))}
                </Container>
            </div>
        </div>
    )
}

export default Clinician;
