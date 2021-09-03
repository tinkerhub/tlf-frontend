import './Styles/TextField.css';

function TextField(props) {

    const { label, onChange, type = 'textfield', value } = props;

    return (
        <div className="textfield-container">
            <p className="label" >{label}</p>
            {type === "dropdown"
                ? <select name="status" value={value} onChange={onChange}  >
                    <option value={false}>Not Completed</option>
                    <option value={true}>Completed</option>
                </select>
                : <input type={type} value={value} onChange={onChange} />}
        </div>
    )
}

export default TextField;