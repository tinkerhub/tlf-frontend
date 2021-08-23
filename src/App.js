import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AdminCreateTask from "./Pages/Admin/Create/CreateTask";
import AdminHome from "./Pages/Admin/Home/AdminHome";
import AdminUpdateTask from "./Pages/Admin/Update/UpdateTask";
import Home from "./Pages/Home/Home";
import ModeratorHome from "./Pages/Moderator/Home/ModeratorHome";
import UserAddTask from "./Pages/User/Create/AddTask";
import UserHome from "./Pages/User/Home/UserHome";
import UserUpdateTask from "./Pages/User/Update/UpdateTask";

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
          <Route exact path="/admin/create">
            <AdminCreateTask />
          </Route>
          <Route exact path="/admin/update">
            <AdminUpdateTask />
          </Route>
          <Route exact path="/user/create">
            <UserAddTask />
          </Route>
          <Route exact path="/user/update">
            <UserUpdateTask />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
