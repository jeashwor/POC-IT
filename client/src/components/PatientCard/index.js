import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import Card from 'react-bootstrap/Card';

function PatientCard({ title, subtitle, text }) {
    return (
        <Card className="mx-auto" id="patient-card">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PatientCard;
