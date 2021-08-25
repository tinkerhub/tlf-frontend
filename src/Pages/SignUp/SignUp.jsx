import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";

import "../Login/Login.css";

function SignUpPage() {
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
            <LoginTextField label="Full Name" />
            <LoginTextField label="email or username" />
            <LoginTextField label="password" />
            <LoginTextField label="Flutter/Python/Javascript" />
          </div>
          <div className="signup-buttons">
            <p className="signup-text">
              Already have an account? <b>Login</b>
            </p>
            <button className="sbtn">Create Account</button>
          </div>
        </PurpleBox>
      </div>
    </div>
  );
}

export default SignUpPage;
