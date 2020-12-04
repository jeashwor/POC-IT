import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import "./style.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function PhotoButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" id="cam-btn" onClick={handleShow}><FaCamera/></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>Photo Sharing</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Share photos to let your provider know how you're healing or if there's anything of concern</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" id="any-btn" onClick={handleClose}>Done</Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default PhotoButton;
