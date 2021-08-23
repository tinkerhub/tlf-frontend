import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AdminHome from "./Pages/Admin/Home/AdminHome";
import Home from "./Pages/Home/Home";
import ModeratorHome from "./Pages/Moderator/Home/ModeratorHome";
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
          <Route exact path="/moderator/home">
            <ModeratorHome />
          </Route>
          <Route exact path="/admin/home">
            <AdminHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
