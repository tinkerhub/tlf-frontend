import React from "react";
import { Link } from "react-router-dom";
import "./Styles/HomeNavBar.css";

function HomeNavBar() {
  return (
    <div>
      <div className="navbar-home">
        <div className="lefttext">
          <p className="line-one">
            <b>TinkerHub</b>
          </p>
          <p className="line-two">Learning Facilitator</p>
        </div>
        <Link to="/" style={{ color: '#FFF' }}>
          <div
            onClick={() => {
              localStorage.removeItem("access_token");
            }}
            className="righttext"
          >
            <p>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeNavBar;
