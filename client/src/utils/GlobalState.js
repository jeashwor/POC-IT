import React, { createContext, useReducer, useContext } from "react";
import {
  ADD_USER,
  GET_ERRORS,
  USER_LOADING,
  SET_CURRENT_USER
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const isEmpty = require("is-empty");

const reducer = (state, action) => {
    switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        patients: [action.patient, ...state.patient],
        loading: false
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.patient),
        currentPatient: action.patient
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true      
      };
    case GET_ERRORS:
      return action.patient;
    default:
      return state;
    }
  };

  const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      patients: [],
      currentPatient: {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
      },
      providers: [],
      currentProvider: {
          name: "",
          email: "",
          password: "",
          password2: "",
          errors: {}
      },
      procedures: [],
      currentProcedure: {
          name: "",
          instructions: "",
          numSteps: 0,
          currentStep: 0,
          currentImage: ""
      },
      isAuthenticated: false,
      user: {},
      loading: false

    });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
  export { StoreProvider, useStoreContext };
  