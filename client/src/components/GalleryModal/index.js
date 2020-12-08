import React, { useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import "./style.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function GalleryModal(props) {
  const [show, setShow] = useState(false);
  // const [currentPhoto, setCurrentPhoto] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => {
    getPhoto();
    setShow(true);
  };

  let getPhoto = () => {
    let pictures = [];
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
      console.log(pictures)
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
                src={""}
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
