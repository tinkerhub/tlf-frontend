import React from "react";
import FilterHome from "../../../Components/FilterHome";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";

import "./ModeratorHome.css";

function ModeratorHome() {
  return (
    <div>
      <div className="momain-container">
        <HomeNavBar />
        <Welcome name="Abhinav K" role="moderator" stack="" />
        <div className="orange-bars">
          <HomeSideHeader label="TLF Mentors" />

          <FilterHome />
        </div>

        <div className="table-container">
          <table id="mview">
            <tr>
              <th>Name</th>
              <th>Task</th>
              <th>Edit</th>
            </tr>

            <tr>
              <td>Lorem Ipsum</td>
              <td>23-08-21</td>
              <td>23-08-21</td>
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
  );
}

export default ModeratorHome;
