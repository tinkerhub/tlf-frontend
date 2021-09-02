import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Welcome.css";

function Welcome({ name, role, stack }) {
  if (role === "USER") {
    return (
      <div>
        <div className="welcome">
          <div className="welcome-text">
            <p className="welcome-name">
              Welcome, <b>{name}</b>
            </p>
            <p className="tagline">
              <b>{stack}</b> Learning Facilitator.
            </p>
            <Link to="/user/create">
              <button className="create-btn">Create Task</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (role === "MODERATOR") {
    return (
      <div>
        <div className="welcome">
          <div className="welcome-text">
            <p className="welcome-name">
              Welcome, <b>{name}</b>
            </p>
            <p className="tagline">
              Learning Facilitator Program <b> Moderator </b>
            </p>
            <Link to="/moderator/create">
              <button className="create-btn">Create Task</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (role === "ADMIN") {
    return (
      <div className="welcome">
        <div className="welcome-text">
          <p className="welcome-name">
            Welcome, <b>{name}</b>
          </p>
          <p className="tagline">
            Learning Facilitator Program <b> Admin </b>
          </p>
          <Link to="/admin/create">
            <button className="create-btn">Create Task</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Welcome;
