import React from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import "./UserHome.css";

function UserHome() {
  return (
    <div>
      <div className="uhmain-container">
        <HomeNavBar />

        <div className="welcome">
          <div className="welcome-text">
            <p className="welcome-name">
              Welcome, <b>Aswin Asok</b>
            </p>
            <p className="tagline">
              <b>JavaScript</b> Learning Facilitator.
            </p>
            <button className="create-btn">Create Task</button>
          </div>
        </div>

        <HomeSideHeader label="Tasks" />

        <div className="points-header">
          <p>330 Points</p>
        </div>

        <div className="table-container">
          <div className="table-header">
            <p>Name</p>
            <p>Assigned Date</p>
            <p>Due Date</p>
            <p>Completed Date</p>
            <p>Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
