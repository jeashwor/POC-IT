import React from "react";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
// import Nav from "../components/Nav";
import StepCard from "../components/StepCard";
import StartButton from "../components/StartButton";
import "./style.css";
import HandGest from "../handGestures/HandGest";

function Intro() {
    // from the results of get(/api/users/:id) where id is patient _id logged in global state:
    // store currentProcedure 'preparation' steps in an array, const preparationArray
    return (
        <div>
            <AppBar />
            <div className="block steps">
                <Container fluid>
                    <h1>Wound Care</h1>
                    <h2>Let's make sure you're ready to begin.</h2>
                    {/* preparationArray.map((step, index) => {
                        return <StepCard title=`{index+1}. {step.title}` text={step.description} />

                        remove the StepCards below
                    }) */}
                    <StepCard title="1. Gather Supplies Needed" text="Saline solution to clean the wound, Sterile gloves, Sterile gauze or wound dressings, Wound tape or surgical adhesive tape, Topical ointments or antibiotics per your provider, Scissors." />
                    <StepCard title="2. Wash your hands" text="Make sure to scrub all portions of your hands completely: the palms, the back, each finger, and in between each finger." />
                    <StepCard title="3. Put on sterile gloves" text="Always wear sterile gloves when handling an open wound, cut or burned skin." />
                    <StepCard title="4. Let POC-IT know you're ready" text="Facing the camera, give POC-IT a thumbs up to begin, or click the button below." />
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
