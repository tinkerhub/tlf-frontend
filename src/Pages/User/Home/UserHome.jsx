import React from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";
import "./UserHome.css";

function UserHome() {
  return (
    <div>
      <div className="uhmain-container">
        <HomeNavBar />

        <Welcome name="Aswin Asok" role="user" stack="JavaScript"/>

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
