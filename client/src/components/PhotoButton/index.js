import React, { useRef, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import * as Webcam from "react-webcam";
import axios from "axios";
import "./style.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WebcamCapture from "../WebcamCapture";

function PhotoButton() {
  const user = useSelector((state) => state.user.user);
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

    function dataURItoBlob(dataURI) {
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(dataURI.split(",")[1]);
      else byteString = unescape(dataURI.split(",")[1]);

      // separate out the mime component
      var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ia], { type: mimeString });
    }

    const saveImg = () => {
      console.log(user.email);
      // console.log(imgSrc)
      var blob = dataURItoBlob(imgSrc);
      const formData = new FormData();
      formData.append("image", blob);

      axios
        .post("/api/image/upload/" + user.email, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(console.log("Image saved"))
        .catch((err) => {
          console.log(err);
          alert("There was an error uploading your image");
        });
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
