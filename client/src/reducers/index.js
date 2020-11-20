import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import userReducer from "./userReducers";
import patientReducer from "./patientReducers";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
    patient: patientReducer
});

