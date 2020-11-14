import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "../components/Nav";
import CareButton from "../components/CareButton";
import "./style.css";
// import API from "../utils/API";

function Patient() {
    // const [user, setUser] = useState("");
    // const [id, setId] = useState("");

    // API.getUser()
    //     .then(res => {
    //         setUser(res.data[0].name);
    //         setId(res.data[0]._id);
    //     })
    //     .then(res => {
    //         console.log(user)
    //         console.log(id)

    //     })
    // // )

    return (
        <div>
            <Nav />
            <div className="block">
                <Container fluid>
                    {/* get(/api/users/) then record name * _id of current user in state, then replace "Jack" in next line with name of current user in state */}
                    <h1>Hi Jack!</h1>
                    <h2>Here's your home care regimen</h2>
                    <div>
                        {/* get(/api/users/:id) with current id in state,  then replace image prop with procedure image, title prop value with procedure name, text prop with procedure description*/}
                        <CareButton image={process.env.PUBLIC_URL + "/assets/wound.png"} title="Wound Care" text="A step-by-step guide for wound dressing change using clean technique" link="/intro" />
                    </div>
                </Container>
            </div>
        </div>

    )
}

export default Patient;
