import './Styles/TextField.css';

function TextField(props) {

    const { label, onChange, type = 'textfield' } = props;

    return (
        <div className="textfield-container">
            <p className="label" >{label}</p>
            {type === "dropdown"
                ? <select name="status" onChange={onChange} >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>
                : <input type={type} onChange={onChange} />}
        </div>
    )
}

export default TextField;