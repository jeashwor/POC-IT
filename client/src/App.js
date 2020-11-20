import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser, getUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Patient from "./pages/Patient";
import Clinician from "./pages/Clinician";
import Intro from "./pages/Intro";
import Procedure from "./pages/Procedure";
import Treatment from "./pages/Treatment";
import NoMatch from "./pages/NoMatch";
import PrivateRoute from "./components/private-route/PrivateRoute";
import ClinicianRoute from "./components/clinician-route/ClinicianRoute";

// Check localStorage to see if user is already signed in.
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  store.dispatch(getUser(decoded.id));
  // Check for expired token and log user out if it is expired
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/patient" component={Patient} />
          <PrivateRoute exact path="/intro" component={Intro} />
          <PrivateRoute exact path="/procedure" component={Procedure} />
          <ClinicianRoute exact path="/clinician" component={Clinician} />
          <PrivateRoute exact path="/treatment" component={Treatment} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
