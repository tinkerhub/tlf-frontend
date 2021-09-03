import React, { useEffect, useState } from "react";
import FilterHome from "../../../Components/FilterHome";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";
import "./AdminHome.css";
import Edit from "./Edit.png";
import Delete from "./Delete.png";
import Profile from "../../User/Profile/Profile";
import { getProfile } from "../../User/Home/userhomeapi";
import { getActivities } from "../../Moderator/Home/moderatorapi";
import { deletetaskapi } from "./deletetaskapi";
import { Link } from "react-router-dom";


function AdminHome({ profileprop }) {
  const [profile, setProfile] = useState(profileprop);
  const [activities, setActivities] = useState();
  const [stack, setStack] = useState("FLUTTER");

  useEffect(() => {
    if (!profile) {
      getProfile(setProfile);
    }
    if (!activities) {
      getActivities(setActivities);
    }
  }, [profile, activities]);

  const deleteTask = async (task) => {
    if (task) {
      const res = await deletetaskapi(task);
      if (res === "error") {
        alert("Could not delete task");
      }
      else if (res === "success") {
        window.location.reload();
      }
    }
  }

  if (activities && profile) {
    return (
      <div>
        <div className="admain-container">
          <HomeNavBar />
          <Welcome name={profile.name} role={profile.role} stack="" />
          <div className="aorange-bar">
            <HomeSideHeader label="TLF Mentors" />
            <FilterHome setStack={setStack} />
          </div>

          <div className="table-container">
            <table id="aview">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Task</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>

                {activities.map((activity, i) => {
                  if (
                    activity.stack === stack &&
                    !activity.Activity.is_complete
                  ) {
                    console.log(activity.Activity);
                    return (
                      <tr key={i}>
                        <td>{activity.name}</td>
                        <td>{activity.Activity.name}</td>
                        <td>
                          <Link to={{ pathname: "/admin/update/" + activity.Activity.id, email: activity.email, data: activity.Activity }} >
                            <img
                              className="eimage"
                              src={Edit}
                              alt="Edit Icon"
                            />
                          </Link>
                        </td>
                        <td>
                          <img
                            className="dimage"
                            src={Delete}
                            alt="Delete Icon"
                            onClick={() => { deleteTask(activity.Activity.id) }}
                          />
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
    return <div>Loading...</div>;
  }
}

export default AdminHome;
