import { useState } from "react";
import { Link } from "react-router-dom";

import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";

import "./Login.css";
import { login } from "./loginapi";
import { getProfile } from "../User/Home/userhomeapi";
import CustomizedSnackbars from "../../Components/AlertSnackBar";

function LogInPage({ setTokenReceived, profile }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await login(email, password, setTokenReceived);
    if (res === "error") {
      setError("Login Failed");
      setTimeout(function(){ window.location.reload(); }, 4000);
    } else if (res === "success") {
      setTokenReceived(true);
      profile = await getProfile();

      if (!profile) {
      } else if (profile === "error") {
        alert("Login failed");
      } else if (profile.role === "ADMIN") {
        window.location.replace("/admin/home");
      } else if (profile.role === "MODERATOR") {
        window.location.replace("/moderator/home");
      } else if (profile.role === "USER") {
        window.location.replace("/user/home");
      }
    }
  };

  return (
    <div className="mainanderror">
      {(() => {
        if (error) {
          return <CustomizedSnackbars error={error} severity={"error"} />;
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
        <div className="lright-side">
          <form onSubmit={handleSubmit}>
            <PurpleBox>
              <div className="login-form">
                <LoginTextField label="email or username" setValue={setEmail} />
                <LoginTextField
                  label="password"
                  type="password"
                  setValue={setPassword}
                />
              </div>

              <div className="login-buttons">
                <Link to="/signup">
                  <p className="login-text">
                    Don't have an account? <b>Create Account</b>
                  </p>
                </Link>

                <button className="lbtn">Login </button>

                <p className="forgot-text">Forgot Password ?</p>
              </div>
            </PurpleBox>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
