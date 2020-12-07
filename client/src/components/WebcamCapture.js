import Webcam from "react-webcam";
import React, { useState, useRef, useCallback } from 'react';

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {

        // Image data saved here in imageSrc variable:
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (<img src={imgSrc} alt="" />)}
        </>
    );
};
export default WebcamCapture;