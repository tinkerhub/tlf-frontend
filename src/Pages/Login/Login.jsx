import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";
import OrangeButton from "../../Components/OrangeButton";

import "./Login.css";

function LogInPage() {
    return (
        <div className="container">
            <PurpleBox>
                <div className="login-form">
                    <div style={{ height: "68px" }} />
                    <LoginTextField label="email or username" />
                    <LoginTextField label="password" />
                    <div style={{ height: "200px" }} />
                    <p className="help-text">Don't have an account? <p className="help-text-bold">Register</p> </p>
                    <OrangeButton label="Sign In" style={{ width: "97%", margin: 0, fontSize: "1.4rem" }} />
                </div>
            </PurpleBox>
        </div>
    );
}

export default LogInPage;