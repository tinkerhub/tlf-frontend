import React from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";

import JavaScriptProfile from "./JavaScriptProfile.png";
import PythonProfile from "./PythonProfile.png";
import FlutterProfile from "./FlutterProfile.png";

import "./Profile.css";

function Profile({ profile }) {
  if (profile) {
    return (
      <div>
        <div className="profile-container">
          <HomeNavBar />
          <div className="profile-body">
            <div className="profile-sidebar">
              <HomeSideHeader label="Profile" />
              <div className="points-header">
                <p>{profile.points} Points</p>
              </div>
            </div>
            <div className="profile-main">
              <div className="profile-pic">
                {(() => {
                  if (profile.stack === "JAVASCRIPT") {
                    return (
                      <img
                        src={JavaScriptProfile}
                        alt="JavaScript Icon"
                        className="profile-image"
                      />
                    );
                  } else if (profile.stack === "PYTHON") {
                    return (
                      <img
                        src={PythonProfile}
                        alt="Python Icon"
                        className="profile-image"
                      />
                    );
                  } else if (profile.stack === "FLUTTER") {
                    return (
                      <img
                        src={FlutterProfile}
                        alt="Flutter Icon"
                        className="profile-image"
                      />
                    );
                  }
                })()}
              </div>

              <div className="profile-text">
                <p className="profile-name">
                  <b>{profile.name}</b>
                </p>
                <p className="profile-email">{profile.email}</p>
                <button className="profile-pass">Change Password?</button>
              </div>
              <div className="profile-table">
                <p className="table-header">Unfinished Tasks</p>
                <table id="pro-task">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Assigned Date</th>
                      <th>Due Date</th>
                    </tr>
                    {profile.activities.map((activity, i) => {
                      if (!activity.is_complete) {
                        return (
                          <tr>
                            <td>{activity.name}</td>
                            <td>{activity.assign_date}</td>
                            <td>{activity.due_date}</td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Profile;
