/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    setAuthToken: (token) => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = token;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    },
    registerUser: (userData) => {
        return axios.post("/api/users/register", userData);
    },
    loginUser: (userData) => {
        console.log(userData);
        return axios.post("/api/users/login", userData);
    }
};
