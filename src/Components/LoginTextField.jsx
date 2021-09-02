import "./Styles/LoginTextField.css";

function LoginTextField(props) {
  const { label, type = "login-textfield", setValue } = props;

  return (
    <div className="login-textfield-container">
      {type === "dropdown"
        ? <select name="status" onChange={(event) => {
          setValue(event.target.value);
        }}  >
          <option value="none" selected disabled hidden>
            Select stack
          </option>
          <option value={"FLUTTER"}>Flutter</option>
          <option value={"PYTHON"}>Python</option>
          <option value={"JAVASCRIPT"}>JavaScript</option>
        </select>
        : <input
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type={type}
          placeholder={label}
        />}
    </div>
  );
}

export default LoginTextField;
