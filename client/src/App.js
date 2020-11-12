import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/patient" component={Patient} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/procedure" component={Procedure} />
          <Route exact path="/clinician" component={Clinician} />
          {/* update to treatment/:id where id is patient id */}
          <Route exact path="/treatment" component={Treatment} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
