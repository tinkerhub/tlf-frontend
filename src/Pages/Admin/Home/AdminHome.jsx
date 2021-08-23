import React from "react";
import FilterHome from "../../../Components/FilterHome";
import HomeNavBar from "../../../Components/HomeNavBar";
import HomeSideHeader from "../../../Components/HomeSideHeader";
import OrangeButton from "../../../Components/OrangeButton";
import Welcome from "../../../Components/Welcome";
import "./AdminHome.css";

function AdminHome() {
  return (
    <div>
      <div className="admain-container">
        <HomeNavBar />
        <Welcome name="Ajay P.S" role="admin" stack="" />
        <div className="aorange-bar">
          <HomeSideHeader label="TLF Mentors" />
          <FilterHome />
        </div>

        <div className="table-container">
          <table id="aview">
            <tr>
              <th>Name</th>
              <th>Task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>

            <tr>
              <td>Lorem Ipsum</td>
              <td>23-08-21</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>

            <tr>
              <td>Lorem Ipsum</td>
              <td>23-08-21</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
