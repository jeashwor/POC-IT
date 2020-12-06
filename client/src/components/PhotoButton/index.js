import React, { useRef, useState, useCallback } from "react";
import { FaCamera } from "react-icons/fa";
import * as Webcam from "react-webcam";
import axios from "axios";
import "./style.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WebcamCapture from "../WebcamCapture";

function PhotoButton() {
  const [show, setShow] = useState(false);
  const webcamRef = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    // Image data saved here in imageSrc variable:
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  // -----------------------------------------------------------------------------------------------------------------------
  //      Send Image to Server
  // -----------------------------------------------------------------------------------------------------------------------
  var fs = require("fs");
  var FormData = require("form-data");
  const saveImg = () => {
    var data = new FormData();

    var config = {
      method: "put",
      url: "localhost:3001/api/image/upload?email=fitzpatrick@test.com",
      headers: {
        ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios
    //   .put("/api/image/upload", imgSrc, {
    //     headers: {
    //       // "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then(alert("Image saved"))
    //   .catch((err) => {
    //     console.log(err);
    //     alert("There was an error uploading your image");
    //   });
  };

  // -----------------------------------------------------------------------------------------------------------------------
  //
  // -----------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <Button variant="primary" id="cam-btn" onClick={handleShow}>
        <FaCamera />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Photo Sharing</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Share photos to let your provider know how you're healing or if
            there's anything of concern
          </p>
          <div id="webcamDiv">
            <Webcam
              id="webcam"
              ref={webcamRef}
              audio={false}
              mirrored={true}
              screenshotFormat="image/jpeg"
              style={{
                width: 320,
                height: 240,
              }}
            />
          </div>
          <button id="captureBtn" onClick={capture}>
            Capture photo
          </button>
          <button id="saveBtn" onClick={saveImg}>
            Save photo
          </button>
          <div id="imageDiv">{imgSrc && <img src={imgSrc} alt="" />}</div>
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

export default PhotoButton;
