import { useState } from "react";
import { Link } from "react-router-dom";

import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";

import "../Login/Login.css";

import { signup } from "./signupapi";

function SignUpPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [stack, setStack] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, stack, password);
    window.location.replace('/login');
  }

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
      <form className="lright-side" onSubmit={handleSubmit} >
        <PurpleBox>
          <div className="login-form">
            <LoginTextField label="Full Name" setValue={setName} />
            <LoginTextField label="email" setValue={setEmail} />
            <LoginTextField label="password" type="password" setValue={setPassword} />
            <LoginTextField
              type="dropdown"
              label="Flutter/Python/Javascript"
              setValue={setStack}
            />
          </div>
          <div className="signup-buttons">
            <Link to="/login">
              <p className="signup-text">
                Already have an account? <b>Login</b>
              </p>
            </Link>
            <Link to="/login">
              <button
                onClick={() => {
                  signup(name, email, stack, password);
                }}
                className="sbtn"
              >
                Create Account
              </button>
            </Link>
          </div>
        </PurpleBox>
      </form>
    </div >
  );
}

export default SignUpPage;
