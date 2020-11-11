/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    createPatient: (patientData) => {
        console.log(patientData);
        return axios.post("/api/patients/register", patientData);
    },
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
    loginUser: (patientData) => {
        return axios.post("/api/patients/login", patientData);
    }
};
