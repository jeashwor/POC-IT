import React, { useRef, useEffect } from 'react'
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import * as Webcam from 'react-webcam';
import * as fp from 'fingerpose'
import {pointDownGesture, pointLeftGesture, pointRightGesture, pointUpGesture} from './gestures'
import './gesture.css'
let i = 1;

// -----------------------------------------------------------------------------------------------------------------------
// ADD NEW GESTURES HERE
// -----------------------------------------------------------------------------------------------------------------------

const GE = new fp.GestureEstimator([
    // fp.Gestures.VictoryGesture,
    // fp.Gestures.ThumbsUpGesture,
    pointDownGesture,
    pointUpGesture,
    pointLeftGesture,
    pointRightGesture
])

// -----------------------------------------------------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------------------------------------------------

function HandGest() {
    const webcamRef = useRef(null);

    const runHandpose = async () => {
        const net = await handpose.load();
        console.log("handpose model loaded.");

        setInterval(() => {
            detect(net)
        }, 300)
    };

    useEffect(() => {
        runHandpose()
    }, [])

    const detect = async (net) => {

        if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {
            const video = webcamRef.current.video;
            const videoWidth = video.videoWidth;
            const videoHeight = video.videoHeight;

            video.width = videoWidth;
            video.height = videoHeight;

            const hand = await net.estimateHands(video);

            if (hand.length > 0) {

                // the second argument in estimate is the confidence level
                const gesture = await GE.estimate(hand[0].landmarks, 8.3);
                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    const confidence = await gesture.gestures.map(prediction => prediction.confidence);
                    const maxConfidence = await confidence.indexOf(Math.max.apply(null, confidence));
                    let gest = gesture.gestures[maxConfidence].name;
                    console.log(gest)

// -----------------------------------------------------------------------------------------------------------------------
// ADD LOGIC FOR WHAT YOU WANT EACH GESTURE TO DO HERE
// -----------------------------------------------------------------------------------------------------------------------

                    if (gest === "point_up") {
                        window.scrollBy(0, -50);
                        // document.getElementById("but"+i).focus()
                        // i--
                    } else if (gest === "point_down") {
                        window.scrollBy(0, 50);
                        // document.getElementById("but"+i).focus()
                        // i++
                    }else if (gest === "point_left") {
                        // window.scrollBy(0, 50);
                        // document.getElementById("but"+i).focus()
                        // i++
                    }else if (gest === "point_right") {
                        // window.scrollBy(0, 50);
                        // document.getElementById("but"+i).focus()
                        // i++
                    }
                    
// -----------------------------------------------------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------------------------------------------------
                }
            }
        }
    };

    return (
        <div>
            <Webcam ref={webcamRef}
                style={{
                    width: 640,
                    height: 480,
                }} />

        </div>
    );
}

export default HandGest;

