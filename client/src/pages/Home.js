import React from "react";
import { Button, Container } from "@material-ui/core";
import HandGest from '../handGestures/HandGest'

function Home() {
    return (
        <Container>
            <p>Home Test</p>
            <HandGest/>
            <Button variant="contained" color="default" href="/login">Login</Button>
        </Container>
    )
}

export default Home;
