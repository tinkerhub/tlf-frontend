import React from "react";
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
            <a href="/user/create">
              <button className="create-btn">Create Task</button>
            </a>
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
            <a href="/moderator/create">
              <button className="create-btn">Create Task</button>
            </a>
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
          <a href="/admin/create">
            <button className="create-btn">Create Task</button>
          </a>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Welcome;
