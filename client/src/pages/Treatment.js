import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "../components/Nav";
import CareButton from "../components/CareButton";
import "./style.css";

function Treatment() {
    return (
        <div>
            <Nav />
            <div className="block treatment">
                <Container fluid>
                    <h1>Jack Joe</h1>
                    <h2>Here's a look at their regimen</h2>
                    <div>
                        <CareButton image={process.env.PUBLIC_URL + "/assets/wound.png"} title="Wound Care" text="A step-by-step guide for wound dressing change using clean technique" link="/intro" />
                    </div>
                </Container>
            </div>
        </div>

    )
}

export default Treatment;
