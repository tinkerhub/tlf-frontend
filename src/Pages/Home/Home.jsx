import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="main-container">
        <div className="navbar">
          <div className="nav-text">
            <p className="nline-1">TinkerHub</p>
            <p className="nline-2">Learning Facilitators Program</p>
          </div>
        </div>

        <div className="body-container">
          <div className="left-side">
            <p className="main-text">
              Welcome to
              <b>
                TinkerHub’s <br />
                Learning Facilitator Program
              </b>
            </p>

            <p className="sub-text">
              TinkerHub Learning Facilitators Program 2021 <br />
              is a{" "}
              <b>
                6-month learning initiative by the
                <br />TinkerHub Foundation {" "}
              </b>
              to create a pool of
              <br /> mentors <b>in 3 different stacks</b> for various
              <br />
              learning programs, curating courses,
              <br />one-to-one mentoring, etc.
            </p>

            <div className="buttons">
              <button className="signup">Sign Up</button>
              <button className="login">Login</button>
            </div>
          </div>

          <div className="right-side"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
