import './Styles/LoginTextField.css';

function LoginTextField(props) {

    const { label } = props;

    return (
        <div className="textfield-container">
            <input type="textfield" placeholder={label} />
        </div>
    )
}

export default LoginTextField;