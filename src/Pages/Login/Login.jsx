import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";

import "./Login.css";

function LogInPage() {
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
            <LoginTextField label="email or username" />
            <LoginTextField label="password" />
          </div>

          <div className="login-buttons">
            <p className="login-text">
              Don't have an account? <b>Create Account</b>
            </p>
            <button className="lbtn">Login </button>
          </div>
        </PurpleBox>
      </div>
    </div>
  );
}

export default LogInPage;
