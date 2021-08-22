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
              Welcome to{" "}
              <b>
                TinkerHub’s <br />
                Learning Facilitator Program.
              </b>
            </p>

            <p className="sub-text">
              TinkerHub Learning Facilitators Program 2021 is a{" "}
              <b>6-month learning initiative by the TinkerHub Foundation</b>
              to create a pool of mentors <b>in 3 different stacks</b> for
              various learning programs, curating courses, one-to-one mentoring,
              etc.
            </p>

            <div className="buttons">
              <button className="signup">Sign Up</button>
              <button className="login">Login</button>
            </div>
          </div>

          <div className="right-side">
            <div className="stacks">
              <p>Flutter</p>
              <p>Python</p>
              <p>JavaScript</p>
            </div>

            <div className="learn">
              <p>
                Let’s teach &<br /> learn together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
