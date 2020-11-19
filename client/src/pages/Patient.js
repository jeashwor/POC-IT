import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
import CareButton from "../components/CareButton";
import "./style.css";

function Patient() {
    const user = useSelector(state => state.user.user);
    return (
        <div>
            <AppBar />
            <div className="block">
                <Container fluid>
                    <h1>{user.name}</h1>
                    <h2>Here's your home care regimen</h2>
                    <div>
                        <CareButton image={process.env.PUBLIC_URL + user.currentProcedures[0].image} title={user.currentProcedures[0].name} text={user.currentProcedures[0].description} link="/intro" />
                    </div>
                </Container>
            </div>
        </div>

    )
}

export default Patient;
