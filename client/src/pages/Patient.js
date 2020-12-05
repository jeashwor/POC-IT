import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
import CareButton from "../components/CareButton";
import PhotoButton from "../components/PhotoButton";
import "./style.css";

function Patient() {
  const user = useSelector((state) => state.user.user);
  let procArr = !user.currentProcedures
    ? [{ image: "/assets/wound.png", name: "", description: "" }]
    : user.currentProcedures[0];

  return (
    <div>
      <AppBar />
      <div className="block">
        <Container fluid>
          <h1>{user.name}</h1>
          <h2>Here's your home care regimen</h2>
          <div>
            <CareButton
              image={process.env.PUBLIC_URL + procArr.image}
              title={procArr.name}
              text={procArr.description}
              link="/intro"
            />
          </div>
          <div className="text-center">
              <PhotoButton/>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Patient;
