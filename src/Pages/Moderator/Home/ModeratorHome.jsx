import React, { useEffect, useState } from "react";
import FilterHome from "../../../Components/FilterHome";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";

import "./ModeratorHome.css";
import Edit from "./Edit.png";

import { getFacilitators } from "./moderatorapi";

function ModeratorHome({ profile }) {
  const [facilitators, setFacilitators] = useState();

  useEffect(() => {
    if (!facilitators) {
      getFacilitators(setFacilitators);
    }
  }, [facilitators]);

  if (profile) {
    return (
      <div>
        <div className="momain-container">
          <HomeNavBar />
          <Welcome name={profile.name} role={profile.role} stack="" />
          <div className="orange-bars">
            <HomeSideHeader label="TLF Mentors" />

            <FilterHome />
          </div>

          <div className="table-container">
            <table id="mview">
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading....</div>;
  }
}

export default ModeratorHome;
