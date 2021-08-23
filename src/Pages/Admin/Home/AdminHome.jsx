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
      </div>
    </div>
  );
}

export default AdminHome;
