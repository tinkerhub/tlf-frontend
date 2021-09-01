import React from "react";
import FilterHome from "../../../Components/FilterHome";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import Welcome from "../../../Components/Welcome";
import "./AdminHome.css";
import Edit from "./Edit.png";
import Delete from "./Delete.png";
import Profile from "../../User/Profile/Profile";

function AdminHome({ profile }) {
  if (profile) {
    return (
      <div>
        <div className="admain-container">
          <HomeNavBar />
          <Welcome name={profile.name} role={profile.role} stack="" />
          <div className="aorange-bar">
            <HomeSideHeader label="TLF Mentors" />
            <FilterHome />
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

                <tr>
                  <td>Lorem Ipsum</td>
                  <td>23-08-21</td>
                  <td>
                    <a href="/admin/update">
                      <img className="eimage" src={Edit} alt="Edit Icon" />
                    </a>
                  </td>
                  <td>
                    <img className="dimage" src={Delete} alt="Delete Icon" />
                  </td>
                </tr>

                <tr>
                  <td>Lorem Ipsum</td>
                  <td>23-08-21</td>
                  <td>
                    <img className="eimage" src={Edit} alt="Edit Icon" />
                  </td>
                  <td>
                    <img className="dimage" src={Delete} alt="Delete Icon" />
                  </td>
                </tr>

                <tr>
                  <td>Lorem Ipsum</td>
                  <td>23-08-21</td>
                  <td>
                    <img className="eimage" src={Edit} alt="Edit Icon" />
                  </td>
                  <td>
                    <img className="dimage" src={Delete} alt="Delete Icon" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem Ipsum</td>
                  <td>23-08-21</td>
                  <td>
                    <img className="eimage" src={Edit} alt="Edit Icon" />
                  </td>
                  <td>
                    <img className="dimage" src={Delete} alt="Delete Icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    <div>Loading...</div>;
  }
}

export default AdminHome;
