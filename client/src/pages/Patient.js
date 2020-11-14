import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "../components/Nav";
import CareButton from "../components/CareButton";
import "./style.css";
import API from "../utils/API";

function Patient() {
    const [user, setUser] = useState("");
    const [id, setId] = useState("");

    API.getUser()
    .then(res => {
        setUser(res.data[0].name);
        setId(res.data[0]._id);
    })
    .then(
        API.getUserInfo(id)
        .then(res => {
            console.log(res);
        })
    )
    
    return (
        <div>
            <Nav />
            <div className="block">
                <Container fluid>
                            <h1>Hi {user}</h1>
                            <h2>Here's your home care regimen</h2>
                            <div>
                                {/* replace with patient procedure assigned, data from axios call */}
                                <CareButton image={process.env.PUBLIC_URL + "/assets/wound.png"} title="Wound Care" text="A step-by-step guide for wound dressing change using clean technique" link="/intro"/>
                            </div>
                </Container>
            </div>
        </div>

    )
}

export default Patient;
