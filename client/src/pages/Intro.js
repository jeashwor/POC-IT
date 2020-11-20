import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
import StepCard from "../components/StepCard";
import StartButton from "../components/StartButton";
import "./style.css";
import HandGest from "../handGestures/HandGest";

function Intro() {
    const procedures = useSelector(state => state.user.user.currentProcedures);
    let prepArr = (!procedures) ? [{title: "No Entries to List", text: "No Entries Found"}] : procedures[0].preparation;

    return (
        <div>
            <AppBar />
            <div className="block steps">
                <Container fluid>
                    <h1>Wound Care</h1>
                    <h2>Let's make sure you're ready to begin.</h2>
                    {prepArr.map((step, index) => <StepCard key={index} title={(index + 1) + ". " + step.title} text={step.step} />)}
                    <div className="text-center">
                        <StartButton  link="/procedure" label="Start"/>
                    </div>
                    <div className="handgest">
                        <HandGest />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Intro;