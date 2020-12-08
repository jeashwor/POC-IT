import React from "react";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
import CareButton from "../components/CareButton";
import GalleryModal from "../components/GalleryModal";
import "./style.css";

function Treatment(props) {
  const handleClick = (e) => {
    this.handleClick = this.handleClick.bind(this);
    e.preventDefault();
    console.log("button clicked");
    console.log(this);
  };
  return (
    <div>
      <AppBar />
      <div className="block treatment">
        <Container fluid>
          <h1>{props.location.user}</h1>
          <h2>Here's a look at their regimen</h2>
          <div>
            <CareButton
              image={process.env.PUBLIC_URL + "/assets/wound.png"}
              onClick={handleClick}
              title="Wound Care"
              text="A step-by-step guide for wound dressing change using clean technique"
              link="/intro"
            />
          </div>
          <div className="text-center">
            <GalleryModal email={props.location.email}/>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Treatment;
