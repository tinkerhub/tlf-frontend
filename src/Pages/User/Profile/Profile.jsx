import React from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";

import JavaScriptProfile from "./JavaScriptProfile.png";
import "./Profile.css";

function Profile() {
  return (
    <div>
      <div className="profile-container">
        <HomeNavBar />
        <div className="profile-body">
          <div className="profile-sidebar">
            <HomeSideHeader label="Profile" />
            <div className="points-header">
              <p>330 Points</p>
            </div>
          </div>
          <div className="profile-main">
            <div className="profile-pic">
              <img src={JavaScriptProfile} alt="" className="profile-image" />
            </div>
            <div className="profile-text">
              <p className="profile-name">
                <b>Lorem Ipsum</b>
              </p>
              <p className="profile-email">loremipsum@tinkerhub.com</p>
              <button className="profile-pass">Change Password?</button>
            </div>

            <div className="profile-table">
              <p className="table-header">Unfinished Tasks</p>
              <table id="pro-task">
                <tr>
                  <th>Name</th>
                  <th>Assigned Date</th>
                  <th>Due Date</th>
                </tr>

                <tr>
                  <td>Lorem Ipsum</td>
                  <td>23-08-21</td>
                  <td>23-08-21</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
