import React from "react";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";

import JavaScriptProfile from "./JavaScriptProfile.png";
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
                <img src={JavaScriptProfile} alt="" className="profile-image" />
              </div>
              <div className="profile-text">
                <p className="profile-name">
                  <b>{profile.name}</b>
                </p>
                <p className="profile-email">{profile.email}</p>
                <button className="profile-pass">Change Password?</button>
              </div>

              {(() => {
                if (profile.activities[0]) {
                  return (
                    <div className="profile-table">
                      <p className="table-header">Unfinished Tasks</p>
                      <table id="pro-task">
                        <tbody>
                          <tr>
                            <th>Name</th>
                            <th>Assigned Date</th>
                            <th>Due Date</th>
                          </tr>

                          <tr>
                            <td>{profile.activities[0].name}</td>
                            <td>{profile.activities[0].assign_date}</td>
                            <td>{profile.activities[0].due_date}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return null;
              })()}
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
