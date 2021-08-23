import './Styles/TextField.css';

function TextField(props) {

    const { label } = props;

    return (
        <div className="textfield-container">
            <p className="label" >{label}</p>
            <input type="textfield" />
        </div>
    )
}

export default TextField;