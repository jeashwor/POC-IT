import React, { useRef, useEffect, useState, useCallback } from "react";
import * as Webcam from "react-webcam";
import * as ml5 from "ml5";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import "./gesture.css";
let brain;
let inputs;
let pose;

const poseParameters = {
  pose1: "Thumbs Up",
  pose2: "OK",
  pose3: "Point Up",
  classifySpeed: 1500,
  webcamWidth: 0,
  webcamHeight: 0,
  videoHidden: false,
};
let carNum = 0;

function HandGest(props) {
  let working = false;
  const webcamRef = useRef(null);
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(null);
  const runHandpose = async () => {

    // set up the video parameters to work with the model
    const video = await webcamRef.current.video;
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    video.width = videoWidth;
    video.height = videoHeight;

    // load the pre-made handpose model and pass the video into it
    // and notify when its loaded
    const handpose = ml5.handpose(video, modelLoaded);
    function modelLoaded() {
      console.log("Model Loaded!");
      setLoading(false);
      poseParameters.webcamWidth = 320;
      poseParameters.webcamHeight = 240;
      startClass();
    }

    // anytime the handpose model sees a hand, run the detect funtion
    handpose.on("predict", detect);

    // set up my neural network parameters
    let options = {
      inputs: 63,
      outputs: 8,
      task: "classification",
      debug: true,
    };
    brain = ml5.neuralNetwork(options);

    // load the trained gesture data from the files and
    // notify when it's ready
    const modelInfo = {
      model: "data/model.json",
      metadata: "data/model_meta.json",
      weights: "data/model.weights.bin",
    };
    brain.load(modelInfo, brainReady);
    function brainReady() {
      console.log("brain ready");
    }
  };

  useEffect(() => {
    runHandpose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const capture = useCallback(() => {

    // Image data saved here in imageSrc variable:
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
}, [webcamRef, setImgSrc]);

// -----------------------------------------------------------------------------------------------------------------------
//      Send Image to Server
// -----------------------------------------------------------------------------------------------------------------------

const saveImg = () => {
  const data = JSON.stringify(imgSrc)
  axios.put("/api/image/upload", data)
      .then(alert("Image saved"))
      .catch(err => {
        console.log(err);
        alert("There was an error uploading your image")
      });
};

// -----------------------------------------------------------------------------------------------------------------------
//
// -----------------------------------------------------------------------------------------------------------------------

  // Start collecting the poses if there are any
  function detect(poses) {
    if (poses.length > 0) {
      working = true;
      pose = poses[0];
    } else {
      working = false;
    }
  }

  // tell the app to start classifying the poses at the
  // speed determined by the 'classifySpeed' variable at the top
  let inter;
  function startClass() {
    working = true;
    inter = setInterval(() => {
      classifyPose();
    }, poseParameters.classifySpeed);
  }

  // send the incoming pose data to the model and
  // classify the data from each pose into gestures
  function classifyPose() {
    if (pose && working) {
      inputs = [];
      for (let i = 0; i < pose.landmarks.length; i++) {
        inputs.push(pose.landmarks[i][0]);
        inputs.push(pose.landmarks[i][1]);
        inputs.push(pose.landmarks[i][2]);
      }
      brain.classify(inputs, gotResult);
    }
  }

  // do something with the gesture results
  function gotResult(error, results) {
    if (results) {
      if (results[0].confidence > 0.85) {
        const gesture = results[0].label;
        console.log(gesture);
        if (gesture === poseParameters.pose1 || gesture === poseParameters.pose3) {
          clearInterval(inter);
          setTimeout(startClass(), 3000);
        }

        // -----------------------------------------------------------------------------------------------------------------------
        // ADD LOGIC FOR WHAT YOU WANT EACH GESTURE TO DO HERE
        // -----------------------------------------------------------------------------------------------------------------------
        if (gesture === poseParameters.pose1) {
          return
        } else if (gesture === poseParameters.pose2) {
          // Advance Gesture
          if (window.location.href.indexOf("procedure") > -1) {
            if (carNum >= 0 && carNum <= 5) {
              carNum += 1;
              props.setIndex(carNum);
            } else {
              return;
            }
          } else {
            history.push("/procedure");
            window.scrollTo(0, 175);
          }
        } else if (gesture === poseParameters.pose3) {
          // Go Back Gesture
          if (carNum >= 1 && carNum <= 6) {
            carNum -= 1;
            props.setIndex(carNum);
          } else {
            return;
          }
        } 
      }
    }
  }
  // -----------------------------------------------------------------------------------------------------------------------
  //
  // -----------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      {loading ? (
        <Loader />
      ) : null}
      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        screenshotFormat="image/jpeg"
        style={{
          width: poseParameters.webcamWidth,
          height: poseParameters.webcamHeight,
        }}
      />
      <button onClick={capture}>Capture photo</button>
      <button onClick={saveImg}>Save photo</button>
      {imgSrc && (<img src={imgSrc} alt="" />)}
    </div>
  );
}

export default HandGest;
