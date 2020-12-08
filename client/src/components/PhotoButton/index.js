import React, { useRef, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { FaCamera, FaSave } from "react-icons/fa";
import * as Webcam from "react-webcam";
import axios from "axios";
import "./style.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PhotoButton() {
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  const webcamRef = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [imgSrc, setImgSrc] = useState(null);
  const [saved, setSaved] = useState(false);

  const capture = useCallback(() => {
    // Image data saved here in imageSrc variable:
    setSaved(false);
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  // -----------------------------------------------------------------------------------------------------------------------
  //      Send Image to Server
  // -----------------------------------------------------------------------------------------------------------------------
  var FormData = require("form-data");
  const saveImg = () => {
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

    var blob = dataURItoBlob(imgSrc);
    const formData = new FormData();
    formData.append("image", blob);

    axios
      .post("/api/image/upload/" + user.email, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(
        console.log("Image saved"),
        setSaved(true)
        )
      .catch((err) => {
        console.log(err);
        alert("There was an error uploading your image");
      });
  };

  const isItSaved = () => {
    if(saved){
      return (<h4>Image Saved</h4>)
    }
  }

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
        <Modal.Body className="modal-bdy">
          <p>
            Share photos of your progress or if there's anything of concern. Take a photo and save.
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
            <FaCamera />
          </button>
          <button id="saveBtn" onClick={saveImg}>
            <FaSave />
          </button>
          <div id="imageDiv">
            {imgSrc && <img src={imgSrc} alt="" />}
            {isItSaved()}
          </div>
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
