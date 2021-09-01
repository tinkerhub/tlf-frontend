import React, { useEffect } from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";
import "./UserHome.css";
import Due from "./Due.png";
import Finish from "./Finish.png";

import { getProfile } from "./userhomeapi";

function UserHome({ tokenreceived }) {
  useEffect(() => {
    if (tokenreceived) {
      getProfile();
    }
  });
  return (
    <div>
      <div className="uhmain-container">
        <HomeNavBar />

        <Welcome name="Aswin Asok" role="user" stack="JavaScript" />

        <HomeSideHeader label="Tasks" />

        <div className="points-header">
          <p>330 Points</p>
        </div>

        <div className="table-container">
          <table id="tasks">
            <tbody>
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
                <td>
                  <a href="/user/update">
                    <img className="uicon" src={Due} alt="Due Icon" />
                  </a>
                </td>
              </tr>

              <tr>
                <td>Lorem Ipsum</td>
                <td>23-08-21</td>
                <td>23-08-21</td>
                <td>23-08-21</td>
                <td>
                  <img className="uicon" src={Finish} alt="Finish Icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
