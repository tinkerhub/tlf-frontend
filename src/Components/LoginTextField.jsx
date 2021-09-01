import "./Styles/LoginTextField.css";

function LoginTextField(props) {
  const { label } = props;

  return (
    <div className="login-textfield-container">
      <input
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
        type="login-textfield"
        placeholder={label}
      />
    </div>
  );
}

export default LoginTextField;
