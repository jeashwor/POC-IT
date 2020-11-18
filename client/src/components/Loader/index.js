import React from "react";
import "./style.css";

function Loader() {
    return (
        <div className="text-center">
            <img id="loader" src="/assets/pocit.png" alt="pocit icon" />
            <h5>Loading</h5>
        </div>
    )
}

export default Loader;
