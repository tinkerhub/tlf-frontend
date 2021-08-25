import PurpleBox from "../../Components/PurpleBox";
import LoginTextField from "../../Components/LoginTextField";
import OrangeButton from "../../Components/OrangeButton";

import "../Login/Login.css";

function SignUpPage() {
    return (
        <div className="lcontainer">
            <PurpleBox>
                <div className="login-form">
                    <div style={{ height: "28px" }} />
                    <LoginTextField label="Full Name" />
                    <LoginTextField label="email or username" />
                    <LoginTextField label="password" />
                    <LoginTextField label="Flutter/Python/Javascript" />
                    <div style={{ height: "60px" }} />
                    <p className="help-text">Already have an account? <p className="help-text-bold">Login</p> </p>
                    <OrangeButton label="Create Account" style={{ width: "97%", margin: 0, fontSize: "1.4rem" }} />
                </div>
            </PurpleBox>
        </div>
    );
}

export default SignUpPage;