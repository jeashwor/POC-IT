import React from "react";
import "./style.css";
import { FaStepBackward, FaStepForward } from "react-icons/fa";
import Card from 'react-bootstrap/Card';

function GestureCard() {
    return (
        <Card className="mx-auto" id="gesture-card">
            <Card.Body>
                <Card.Title>Tip: Use the following hand gestures to advance touch-free. Point up to go back and give the 'OK' to move forward.</Card.Title>
                <Card.Text>
                    <FaStepBackward />
                    <img id="backGest" src={process.env.PUBLIC_URL + "/assets/point.png"} alt="back gesture" />
                    <img id="fwdGest" src={process.env.PUBLIC_URL + "/assets/ok.png"} alt="forward gesture" />
                    <FaStepForward />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GestureCard;
