import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';

function StepCard({title, subtitle, text}) {
    return (
        <Card className="mx-auto" id="step-card">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default StepCard;
