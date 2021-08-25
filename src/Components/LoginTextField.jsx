import './Styles/LoginTextField.css';

function LoginTextField(props) {

    const { label } = props;

    return (
        <div className="login-textfield-container">
            <input type="login-textfield" placeholder={label} />
        </div>
    )
}

export default LoginTextField;