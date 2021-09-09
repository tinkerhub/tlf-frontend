import React, { useState } from "react";
import { Link } from "react-router-dom";

import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";

import "../Login/Login.css";

import { staffsignup } from "./staffapi";
import CustomizedSnackbars from "../../Components/AlertSnackBar";

function SpecialSignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [secret, setSecret] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length >= 8) {
      await staffsignup(name, email, password, secret);
      window.location.replace('/login');
    }
    else {
      setError(true);
      setTimeout(function () { window.location.reload(); }, 4000);
    }
  }

  return (
    <div>
      {(() => {
        if (error) {
          return <CustomizedSnackbars message={"Password must contain Minimum eight characters"} severity={"error"} />;
        }
      })()}
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
        <form className="lright-side" onSubmit={handleSubmit} >
          <PurpleBox>
            <div className="login-form">
              <LoginTextField label="Full Name" setValue={setName} />
              <LoginTextField label="email or username" setValue={setEmail} />
              <LoginTextField type="password" label="password" setValue={setPassword} />
              <LoginTextField type="password" label="secret key" setValue={setSecret} />
            </div>
            <div className="signup-buttons">
              <Link to="/login">
                <p className="signup-text">
                  Already have an account? <b>Login</b>
                </p>
              </Link>

              <Link to="/login">
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="sbtn"
                >
                  Create Account
                </button>
              </Link>
            </div>
          </PurpleBox>
        </form>
      </div>
    </div>
  );
}

export default SpecialSignUp;
