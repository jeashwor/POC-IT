import React from "react";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
// import Nav from "../components/Nav";
import CareButton from "../components/CareButton";
import "./style.css";

function Treatment() {
    // need patient _id selected from previous /provider page
    // get(/api/users/:id)
    return (
        <div>
            <AppBar />
            <div className="block treatment">
                <Container fluid>
                    {/* replace "Jack Joe" with patient name {name} */}
                    <h1>Jack Joe</h1>
                    <h2>Here's a look at their regimen</h2>
                    <div>
                        {/* get(/api/users/:id) with current id in state,  then replace image prop with procedure image, title prop value with procedure name, text prop with procedure description*/}
                        <CareButton image={process.env.PUBLIC_URL + "/assets/wound.png"} title="Wound Care" text="A step-by-step guide for wound dressing change using clean technique" link="/intro" />
                    </div>
                </Container>
            </div>
        </div>

    )
}

export default Treatment;
