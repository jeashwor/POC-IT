import React, { useState, useEffect, useRef } from "react";
import { HiPhotograph } from "react-icons/hi";
import "./style.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function GalleryModal(props) {
  const [show, setShow] = useState({
    show: false,
    currentPhoto: []
  });
  let pictures = [];

  // Grab photos whenever component is re-rendered
  useEffect(() => {
    getPhoto()
  });

  // Open Image Gallery Modal
  const handleShow = () => {
    setShow({
      ...show,
      show: true,
      currentPhoto: pictures
    });
  };

  // Close Image Gallery Modal
  const handleClose = () => {
    setShow({
      ...show,
      show: false
    });
  }

  let getPhoto = () => {
    axios
      .get("/api/image/patient?email=" + props.email)
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          axios
            .get("/api/image/files?email=" + props.email + "&num=" + i)
            .then((response) => {
              pictures.push(response)
            });
        };
      })
  };

  const displayImages = () => {
    if(show.currentPhoto.length > 0){
      return (
        show.currentPhoto.map((image, i) => (
          <Carousel.Item key={i} >
            <img
              className="d-block w-100"
              src={image.data}
              alt="progress upload"
            />
          </Carousel.Item>
        ))
      )
    } else {
      return (
        <div>
          <h3>No Images To Display!</h3>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        
      )
    }
  }

  return (
    <div>
      <Button variant="primary" id="gal-btn" onClick={handleShow}>
        <HiPhotograph />
      </Button>

      <Modal show={show.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Patient Photos</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {displayImages()}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id="any-btn" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GalleryModal;
