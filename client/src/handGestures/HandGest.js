import React, { useRef, useEffect, useState } from 'react'
import * as Webcam from 'react-webcam';
import * as ml5 from 'ml5';
import './gesture.css'
let brain;
let inputs;
let pose;

const poseParameters = {
    pose1: "OK",
    pose2: "Thumbs Up",
    pose3: "Left",
    pose4: "Right",
    classifySpeed: 1000,
    webcamWidth: 640,
    webcamHeight: 480,
    videoHidden: false
}
let carNum = 0;


function HandGest(props) {
    let working = false;
    const webcamRef = useRef(null);


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
            console.log('Model Loaded!');
            startClass()
        }


        // anytime the handpose model sees a hand, run the detect funtion
        handpose.on('predict', detect);

        // set up my neural network parameters
        let options = {
            inputs: 42,
            outputs: 4,
            task: 'classification',
            debug: true
        }
        brain = ml5.neuralNetwork(options);

        // load the trained gesture data from the files and 
        // notify when it's ready
        const modelInfo = {
            model: 'data/model.json',
            metadata: 'data/model_meta.json',
            weights: 'data/model.weights.bin'
        }
        brain.load(modelInfo, brainReady);
        function brainReady() {
            console.log('brain ready');
        }
    };

    useEffect(() => {
        runHandpose()
    }, [])

    // Start collecting the poses if there are any
    function detect(poses) {
        if (poses.length > 0) {
            working = true
            pose = poses[0];
        } else {
            working = false
        }
    };

    // tell the app to start classifying the poses at the 
    // speed determined by the 'classifySpeed' variable at the top
    let inter;
    function startClass() {
        working = true
        inter = setInterval(() => {
            classifyPose()
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
            }
            brain.classify(inputs, gotResult)
        }
    }

    // do something with the gesture results
    function gotResult(error, results) {
        if (results[0].confidence > 0.89) {
            const gesture = results[0].label
            console.log(gesture)
            if(gesture === poseParameters.pose1){
                clearInterval(inter)
                setTimeout(startClass(), 2000)
            }


// -----------------------------------------------------------------------------------------------------------------------
// ADD LOGIC FOR WHAT YOU WANT EACH GESTURE TO DO HERE
// -----------------------------------------------------------------------------------------------------------------------
            // OK Gesture:
            if (gesture === poseParameters.pose1) {
                carNum += 1;
                props.setIndex(carNum);

            // Thumbs Up Gesture
            } else if (gesture === poseParameters.pose2) {
                carNum -= 1;
                props.setIndex(carNum);

            } else if (gesture === poseParameters.pose3) {
                // window.scrollBy(0, 50);

            } else if (gesture === poseParameters.pose4) {
                // window.scrollBy(0, 50);

            }

        }
    }
// -----------------------------------------------------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------------------------------------------------

    return (
        <div>
            <Webcam ref={webcamRef}
                audio={false}
                mirrored={true}
                style={{
                    width: poseParameters.webcamWidth,
                    height: poseParameters.webcamHeight
                }} />
        </div>
    );
}

export default HandGest;
    

