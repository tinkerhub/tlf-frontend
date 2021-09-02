import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/HeaderBar.css';

function HeaderBar() {
    return (
        <div className="purplebox">
            <div className="contents">
                <div className="title">TinkerHub</div>
                <div className="title subtitle">Learning Facilitator</div>
            </div>
            <Link to="/" style={{ color: "#FFF" }}>
                <div onClick={() => {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("profile");
                }} className="title logout">Logout</div>
            </Link>

        </div >
    );
}

export default HeaderBar;