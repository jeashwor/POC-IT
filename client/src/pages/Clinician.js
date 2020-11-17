import React from "react";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
// import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import PatientCard from "../components/PatientCard";
import "./style.css";

function Clinician(props) {
    return (
        <div>
            <AppBar />
            <div className="block">
                <Container fluid>
                    {/* from get(/api/users/), record .name & ._id of current user in state (res.data[0].name, res.data[0]._id), then replace "Jane" in next line with name of current user in state */}
                    <h1>{props.user.user.name}</h1>
                    <h2>Let's find your patient</h2>
                    <SearchForm />
                </Container>
                <Container fluid>
                    <h2>Select your patient</h2>
                    {/* from get(api/users/displaypatients), map & generate patient cards for each of their patients 
                        return (
                            <PatientCard title={patient name} text={patient DOB} link="/treatment" />
                        )
                        remove PatientCard below

                    */}
                    <PatientCard title="Jack Joe" text="DOB" link="/treatment" />
                </Container>
            </div>
        </div>
    )
}

export default Clinician;
