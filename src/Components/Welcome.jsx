import React from "react";
import "./Styles/Welcome.css";

function Welcome({ name, role, stack }) {
  if (role == "user") {
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
            <button className="create-btn">Create Task</button>
          </div>
        </div>
      </div>
    );
  } else if (role == "moderator") {
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
            <button className="create-btn">Create Task</button>
          </div>
        </div>
      </div>
    );
  } else if (role == "admin") {
    return (
      <div className="welcome">
        <div className="welcome-text">
          <p className="welcome-name">
            Welcome, <b>{name}</b>
          </p>
          <p className="tagline">
            Learning Facilitator Program <b> Admin </b>
          </p>
          <button className="create-btn">Create Task</button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Welcome;
