import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'
import Nav from "../components/Nav";
import StepCard from "../components/StepCard";
import HandGest from "../handGestures/HandGest";
import "./style.css";

function Procedure() {
    // update later to take procedures from API call
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Nav />
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} wrap={false}>
                <Carousel.Item>
                    <div id="block" className="steps">
                        <Container fluid>
                            <h1>Step 1</h1>
                            <StepCard title="Remove the Dressing" text="Use drops of either water or saline solution around the tape on the skin to loosen the tape. Gently remove the dressing." />
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="block" className="steps">
                        <Container fluid>
                            <h1>Step 2</h1>
                            <StepCard title="Inspect the Wound" text="Check to see if there are any signs of infection, such as pus or a foul smell. If you notice any of them, note the issues and let the patient’s healthcare provider know once you're done with the dressing change." />
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="block" className="steps">
                        <Container fluid>
                            <h1>Step 3</h1>
                            <StepCard title="Clean the wound" text="Wet a gauze with saline water and gently clean up any blood or other bodily fluids (a small amount of blood is ok. If it’s a substantial amount, the person needs medical attention)." />
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="block" className="steps">
                        <Container fluid>
                            <h1>Step 4</h1>
                            <StepCard title="Let the wound air dry" text="Once clean, let the wound fully air dry (placing new dressings while the wound is still wet fosters bacteria growth)." />
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="block" className="steps">
                        <Container fluid>
                            <h1>Step 5</h1>
                            <StepCard title="Apply Ointment" text="Once dry, apply antibiotic ointment to the wound.    " />
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="block" className="steps">
                        <Container fluid>
                            <h1>Step 6</h1>
                            <StepCard title="Place a new wound dressing" text="Apply a new non-stick pad to the wound and extra gauze if needed. Once covered, gently secure with wound tape." />
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="block" className="steps">
                        <Container fluid>
                            <h1>You're all set!</h1>
                            <StepCard title="Kudos to keeping it clean" text="Time to remove the gloves."/>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

export default Procedure;
