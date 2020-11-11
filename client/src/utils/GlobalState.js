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
        users: [action.user, ...state.user],
        loading: false
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true      
      };
    case GET_ERRORS:
      return action.user;
    default:
      return state;
    }
  };

  const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
      users: [],
      currentUser: {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
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
  