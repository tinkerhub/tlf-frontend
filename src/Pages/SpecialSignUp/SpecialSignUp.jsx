import React from "react";

import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";

import "../Login/Login.css";

function SpecialSignUp() {
  return (
    <div>
      <div className="lcontainer">
        <div className="lleft-side">
          <div className="lcontents">
            <p className="lheader">
              Welcome to <b>TinkerHub Learning Facilitator Program.</b>
            </p>
            <p className="lsubs">
              TinkerHub Learning Facilitators Program 2021 is a{" "}
              <b>6-month learning initiative by the TinkerHub Foundation</b> to
              create a pool of mentors in<b> 3 different stacks</b> for various
              learning programs, curating courses, one-to-one mentoring, etc.
            </p>
          </div>
        </div>
        <div className="lright-side">
          <PurpleBox>
            <div className="login-form">
              <LoginTextField label="Full Name" />
              <LoginTextField label="email or username" />
              <LoginTextField label="password" />
              <LoginTextField label="secret key" />
            </div>
            <div className="signup-buttons">
              <a href="/login">
                <p className="signup-text">
                  Already have an account? <b>Login</b>
                </p>
              </a>
              <a href="/user/home">
                <button className="sbtn">Create Account</button>
              </a>
            </div>
          </PurpleBox>
        </div>
      </div>
    </div>
  );
}

export default SpecialSignUp;
