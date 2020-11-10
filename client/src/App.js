import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { StoreProvider } from "./utils/GlobalState";
import Patient from "./pages/Patient";
import Intro from "./pages/Intro";
import HandGest from "./handGestures/HandGest";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/patient" component={Patient} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/handGest" component={HandGest} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
