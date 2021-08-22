import React from 'react';
import './HeaderBar.css';

function HeaderBar() {
    return (
        <div className="purplebox">
            <div className="contents">
                <div className="title">TinkerHub</div>
                <div className="title subtitle">Learning Facilitator</div>
            </div>

            <div className="title logout">Logout</div>

        </div >
    );
}

export default HeaderBar;