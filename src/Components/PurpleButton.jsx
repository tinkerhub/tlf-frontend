import './Styles/PurpleButton.css';

function PurpleButton(props) {

    const { label } = props;

    return (
        <input type="submit"
            value={label}
            className="purplebutton purplebutton-text"
        />
    )
}

export default PurpleButton;