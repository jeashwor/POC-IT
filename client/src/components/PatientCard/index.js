import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';

function PatientCard({ link, title, subtitle, text }) {
    return (
        <Card className="mx-auto" id="patient-card">
            <Card.Body>
                <a className="stretched-link text-decoration-none" href={link}><Card.Title>{title}</Card.Title></a>
                <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PatientCard;
