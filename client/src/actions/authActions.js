import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_USER, SET_CURRENT_USER, USER_LOADING } from "./types";

export const registerUser = (userData, history) => dispatch => {
    axios.post("/api/users/register", userData)
        .then(res => history.push("/login"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const getUser = userData => dispatch => {
    axios.get("/api/users/" + userData)
        .then((res, req) => {
            console.log(res);
            console.log(req);
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

export const loginUser = userData => dispatch => {
    axios.post("/api/users/login", userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            console.log(decoded.id);
            dispatch(getUser(decoded.id));
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

export const logoutUser = history => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
