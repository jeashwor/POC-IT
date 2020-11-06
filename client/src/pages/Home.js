import React from "react";
import { Button, Container } from "@material-ui/core";

function Home() {
    return (
        <Container>
            <p>Home Test</p>
            <Button variant="contained" color="default" href="/login">Login</Button>
        </Container>
    )
}

export default Home;
