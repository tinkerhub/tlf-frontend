import { Link } from "react-router-dom";

import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";
import "./UserHome.css";
import Due from "./Due.png";
import Finish from "./Finish.png";
import { useEffect, useState } from "react";
import { getProfile } from "./userhomeapi";

function UserHome({ profileprop }) {
  const [profile, setProfile] = useState(profileprop);

  useEffect(() => {
    if (!profile) {
      getProfile(setProfile);
    }
  }, [profile]);

  if (profile) {
    return (
      <div>
        <div className="uhmain-container">
          <HomeNavBar />
          <a href="/user/profile/">
            <Welcome
              name={profile.name}
              role={profile.role}
              stack={
                profile.stack.charAt(0) + profile.stack.substr(1).toLowerCase()
              }
            />
          </a>

          <HomeSideHeader label="Tasks" />

          <div className="points-header">
            <p>{profile.points} Points</p>
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

                {profile.activities.map((activity) => (
                  <tr>
                    <td>{activity.name}</td>
                    <td>{activity.assign_date}</td>
                    <td>{activity.due_date}</td>
                    <td>{activity.completed_date}</td>
                    {activity.is_complete ? (
                      <td>
                        <Link
                          to={{
                            pathname: "/user/update/" + activity.id,
                            data: activity,
                          }}
                        >
                          <img className="uicon" src={Finish} alt="Due Icon" />
                        </Link>
                      </td>
                    ) : (
                      <td>
                        <Link
                          to={{
                            pathname: "/user/update/" + activity.id,
                            data: activity,
                          }}
                        >
                          <img className="uicon" src={Due} alt="Due Icon" />
                        </Link>
                      </td>
                    )}
                  </tr>
                ))}
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

export default UserHome;
