import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
// import Nav from "../components/Nav";
import CareButton from "../components/CareButton";
import "./style.css";

function Treatment(props) {
  // need patient _id selected from previous /provider page
  // get(/api/users/:id)
  //   const user = useSelector((state) => state.user.user);

  // const dispatch = useDispatch()
  const handleClick = (e) => {
    this.handleClick = this.handleClick.bind(this);
    e.preventDefault();
    console.log("button clicked");
    console.log(this);
    // setPatient(this.title);
  };
  return (
    <div>
      <AppBar />
      <div className="block treatment">
        <Container fluid>
          {/* replace "Jack Joe" with patient name {name} */}
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
        </Container>
      </div>
    </div>
  );
}

export default Treatment;
