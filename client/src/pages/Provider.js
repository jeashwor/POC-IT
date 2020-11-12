import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import PatientCard from "../components/PatientCard";
import "./style.css";

function Provider() {
    return (
        <div>
            <Nav />
            <div className="block">
                <Container fluid>
                    <h1>Hi Jane!</h1>
                    <h2>Let's find your patient</h2>
                    <SearchForm />
                </Container>
                <Container fluid>
                    <h2>Select your patient</h2>
                    {/* update to progress/:id */}
                    <PatientCard title="Jack Joe" text="DOB" link="/treatment" />
                </Container>
            </div>
        </div>
    )
}

export default Provider;
