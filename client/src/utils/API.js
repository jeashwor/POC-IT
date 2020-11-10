/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    createPatient: (patientData) => {
        return axios.post("/api/patient/register", patientData);
    },
    setAuthToken: (token) => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = token;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }
};
