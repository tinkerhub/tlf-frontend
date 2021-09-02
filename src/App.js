import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AdminCreateTask from "./Pages/Admin/Create/CreateTask";
import AdminHome from "./Pages/Admin/Home/AdminHome";
import AdminUpdateTask from "./Pages/Admin/Update/UpdateTask";
import Home from "./Pages/Home/Home";
import LogInPage from "./Pages/Login/Login";
import SignUpPage from "./Pages/SignUp/SignUp";
import ModeratorHome from "./Pages/Moderator/Home/ModeratorHome";
import UserAddTask from "./Pages/User/Create/AddTask";
import UserHome from "./Pages/User/Home/UserHome";
import UserUpdateTask from "./Pages/User/Update/UpdateTask";
import SpecialSignUp from "./Pages/SpecialSignUp/SpecialSignUp";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Profile from "./Pages/User/Profile/Profile";

import { getProfile } from "./Pages/User/Home/userhomeapi";

function App() {
  const [tokenreceived, setTokenReceived] = useState(false);
  const [profile, setProfile] = useState();

  useEffect(() => {
    if (tokenreceived) {
      getProfile(setProfile);
    }

    if (
      localStorage.getItem("profile") &&
      localStorage.getItem("access_token")
    ) {
      setProfile(JSON.parse(localStorage.getItem("profile")));
    }
  }, [tokenreceived]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/home">
            <UserHome profile={profile} />
          </Route>
          <Route exact path="/moderator/home">
            <ModeratorHome profile={profile} />
          </Route>
          <Route exact path="/admin/home">
            <AdminHome profile={profile} />
          </Route>
          <Route exact path="/admin/create">
            <AdminCreateTask />
          </Route>
          <Route exact path="/admin/update/:id" render={(props) => <AdminUpdateTask {...props} />} />
          <Route exact path="/user/create">
            <UserAddTask />
          </Route>
          <Route exact path="/user/update/:id" render={(props) => <UserUpdateTask {...props} />} />
          <Route exact path="/moderator/create">
            <AdminCreateTask />
          </Route>
          <Route exact path="/moderator/update/:id" render={(props) => <AdminUpdateTask {...props} />} />
          <Route exact path="/user/profile">
            <Profile profile={profile} />
          </Route>
          <Route exact path="/login">
            <LogInPage setTokenReceived={setTokenReceived} profile={profile} />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path="/specialsignup">
            <SpecialSignUp />
          </Route>
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
