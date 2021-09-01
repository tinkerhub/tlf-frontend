import { useState } from "react";
import { Link } from "react-router-dom";

import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";

import "./Login.css";

import { login } from "./login";

function LogInPage({ setTokenReceived }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
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
            <LoginTextField label="email or username" setValue={setEmail} />
            <LoginTextField label="password" setValue={setPassword} />
          </div>

          <div className="login-buttons">
            <Link to="/signup">
              <p className="login-text">
                Don't have an account? <b>Create Account</b>
              </p>
            </Link>
            <Link to="/user/home">
              <button
                onClick={() => {
                  login(email, password, setTokenReceived);
                }}
                className="lbtn"
              >
                Login{" "}
              </button>
            </Link>

            <p className="forgot-text">Forgot Password ?</p>
          </div>
        </PurpleBox>
      </div>
    </div>
  );
}

export default LogInPage;
