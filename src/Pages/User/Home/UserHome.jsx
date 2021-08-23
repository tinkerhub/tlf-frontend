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
          <table id="tasks">
            <tr>
              <th>Name</th>
              <th>Assigned Date</th>
              <th>Due Date</th>
              <th>Completed Date</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Lorem Ipsum</td>
              <td>23-08-21</td>
              <td>23-08-21</td>
              <td>23-08-21</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Lorem Ipsum</td>
              <td>23-08-21</td>
              <td>23-08-21</td>
              <td>23-08-21</td>
              <td>Completed</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
