import React from "react";

import HomeNavBar from "../../Components/HomeNavBar";
import PurpleButton from "../../Components/PurpleButton";
import RedBox from "../../Components/RedBox";
import TextField from "../../Components/TextField";

import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div>
      <div className="main-container">
        <HomeNavBar />
        <div className="fpbody-container">
          <div className="fpheader">Update Password</div>
        </div>

        <form className="container">
          <TextField label="New Password" />
          <TextField label="Confirm Password" />
          <PurpleButton label="Update" />
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
