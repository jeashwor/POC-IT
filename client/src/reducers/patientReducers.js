import { SET_PATIENT } from "../actions/types";

const initialState = {
    patient: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_PATIENT:
            return {
                ...state,
                patient: action.payload
            };
        default:
            return state;
    }
}