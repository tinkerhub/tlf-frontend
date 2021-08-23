import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import UserHome from "./Pages/User/Home/UserHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/home">
            <UserHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
