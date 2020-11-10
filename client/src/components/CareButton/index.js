import React from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';

function CareButton({image, title, text, link}) {
    return (
            <Card className="mx-auto" id="care-card">
                <Card.Img src={image} alt="procedure graphic" />
                <Card.ImgOverlay>
                    <a className="card-block stretched-link text-decoration-none" href={link} />
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                </Card.ImgOverlay>
            </Card>
    )
}

export default CareButton;
