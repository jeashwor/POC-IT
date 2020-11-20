import axios from "axios";
import { SET_PATIENT } from "./types";

export const setPatient = email => dispatch => {
    console.log("getting patient");
    axios.get("/api/patient/" + email)
    .then(res => {
        dispatch({
            type: SET_PATIENT,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
};