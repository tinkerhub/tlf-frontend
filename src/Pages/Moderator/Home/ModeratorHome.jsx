import React from "react";
import FilterHome from "../../../Components/FilterHome";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";

import "./ModeratorHome.css";
import Edit from "./Edit.png";

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
              <td>TLF Website</td>
              <td>
                <a href="/moderator/update">
                  <img className="eimage" src={Edit} alt="Edit Icon" />
                </a>
              </td>
            </tr>

            <tr>
              <td>Lorem Ipsum</td>
              <td>TLF Website</td>
              <td>
                <img className="eimage" src={Edit} alt="Edit Icon" />
              </td>
            </tr>

            <tr>
              <td>Lorem Ipsum</td>
              <td>TLF Website</td>
              <td>
                <img className="eimage" src={Edit} alt="Edit Icon" />
              </td>
            </tr>

            <tr>
              <td>Lorem Ipsum</td>
              <td>TLF Website</td>
              <td>
                <img className="eimage" src={Edit} alt="Edit Icon" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ModeratorHome;
