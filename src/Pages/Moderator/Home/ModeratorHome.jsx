import React, { useEffect, useState } from "react";
import FilterHome from "../../../Components/FilterHome";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";

import "./ModeratorHome.css";
import Edit from "./Edit.png";

import { getActivities } from "./moderatorapi";

function ModeratorHome({ profile }) {
  const [activities, setActivities] = useState();
  const [stack, setStack] = useState("FLUTTER");

  useEffect(() => {
    if (!activities) {
      getActivities(setActivities);
    }
  }, [activities]);

  if (activities && profile) {
    return (
      <div>
        <div className="momain-container">
          <HomeNavBar />
          <Welcome name={profile.name} role={profile.role} stack="" />
          <div className="orange-bars">
            <HomeSideHeader label="TLF Mentors" />

            <FilterHome setStack={setStack} />
          </div>

          <div className="table-container">
            <table id="mview">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Task</th>
                  <th>Edit</th>
                </tr>

                {activities.map((activity, i) => {
                  if (
                    activity.stack === stack &&
                    !activity.Activity.is_complete
                  ) {
                    return (
                      <tr key={i}>
                        <td>{activity.name}</td>
                        <td>{activity.Activity.name}</td>
                        <td>
                          <a href={"/moderator/update/" + activity.Activity.id}>
                            <img
                              className="eimage"
                              src={Edit}
                              alt="Edit Icon"
                            />
                          </a>
                        </td>
                      </tr>
                    );
                  }
                })}
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
