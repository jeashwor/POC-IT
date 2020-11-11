import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Patient from "./pages/Patient";
import Intro from "./pages/Intro";
<<<<<<< HEAD
import Procedure from "./pages/Procedure";
=======
import HandGest from "./handGestures/HandGest";
>>>>>>> 2f2600f4b49dea62fc237c653cceaae4a6335c04

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/patient" component={Patient} />
          <Route exact path="/intro" component={Intro} />
<<<<<<< HEAD
          <Route exact path="/procedure" component={Procedure} />
=======
          <Route exact path="/handGest" component={HandGest} />
>>>>>>> 2f2600f4b49dea62fc237c653cceaae4a6335c04
        </Switch>
      </div>
    </Router>
  );
}

export default App;
