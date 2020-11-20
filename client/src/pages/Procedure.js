import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'
import AppBar from "../components/AppBar";
import StartButton from "../components/StartButton";
import StepCard from "../components/StepCard";
import HandGest from "../handGestures/HandGest";
import "./style.css";

function Procedure() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const procedures = useSelector(state => state.user.user.currentProcedures);
    let instrArr = (!procedures) ? [{title: "No Entries to List", text: "No Entries Found"}] : procedures[0].instructions;
    return (
        <div className="block steps">
            <AppBar />
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} wrap={false}>
                {instrArr.map((step, index) => {
                        return (
                            <Carousel.Item key={index + 1}>
                                <div id="block" className="steps">
                                    <Container fluid>
                                        <h1>Step {index+1}</h1>
                                        <StepCard title={step.title} text={step.step}/>
                                    </Container>
                                </div>
                            </Carousel.Item>
                        )

                })}
                <Carousel.Item>
                    <div id="block" className="steps">
                        <Container fluid>
                            <h1>You're all set!</h1>
                            <StepCard title="Kudos to keeping it clean" text="Time to remove the gloves." />
                        </Container>
                        <div className="text-center">
                            <StartButton link="/patient" label="Back to Dashboard" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="handgest">
                <h3>Use "OK" to go forward and "Point Up" to go back.</h3>
                <HandGest index={index} setIndex={setIndex} />
            </div>
        </div >
    )
}

export default Procedure;
