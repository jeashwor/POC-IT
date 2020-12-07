import React, { useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import "./style.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function GalleryModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("hit");
    getPhoto();
    setShow(true);
  };

  let currentPhoto;

  let getPhoto = () => {
    axios
      .get("/api/image/files?email=fitzpatrick@test.com")
      .then((response) => {
        currentPhoto = response.data.toString("base64");
        console.log(currentPhoto);
      });
  };

  return (
    <div>
      <Button variant="primary" id="gal-btn" onClick={handleShow}>
        <HiPhotograph />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Patient Photos</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={currentPhoto}
                alt="progress upload"
              />
              <Carousel.Caption>
                <h3>Nov 21, 2020</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "assets/foot2.jpg"}
                alt="progress upload"
              />

              <Carousel.Caption>
                <h3>Dec 21, 2020</h3>
              </Carousel.Caption>
            </Carousel.Item>
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
