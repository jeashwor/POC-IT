import React from "react";
import LoginForm from "../components/loginForm"
import NavBar from "../components/navbar";

function Login() {
    return (
        <div>
            <NavBar />
            <div>Welcome Back</div>
            <LoginForm />
        </div>
    )
}

export default Login;
