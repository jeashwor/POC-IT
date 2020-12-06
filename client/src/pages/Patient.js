import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import AppBar from "../components/AppBar";
import CareButton from "../components/CareButton";
import PhotoButton from "../components/PhotoButton";
import axios from "axios";
import "./style.css";
let img;

function Patient() {
  const user = useSelector((state) => state.user.user);
  let procArr = !user.currentProcedures
    ? [{ image: "/assets/wound.png", name: "", description: "" }]
    : user.currentProcedures[0];

  useEffect(() => {
  axios.get("/api/image/files/" + user.email)
    .then(function (response) {
      // <img src={response.data} alt=""></img>)
      img = response
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  })
  

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
