import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "../components/Nav";
import CareButton from "../components/CareButton";
import "./style.css";

function Patient() {
    return (
        <div>
            <Nav />
            <div className="block">
                <Container fluid>
                            <h1>Hi Jack!</h1>
                            <h2>Here's your home care regimen</h2>
                            <div>
                                <CareButton image={process.env.PUBLIC_URL + "/assets/wound.png"} title="Wound Care" text="A step-by-step guide for wound dressing change using clean technique" link="/intro"/>
                            </div>
                </Container>
            </div>
        </div>

    )
}

export default Patient;
