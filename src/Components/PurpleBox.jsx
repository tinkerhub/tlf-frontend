import './Styles/PurpleBox.css';

function PurpleBox(props) {
    return (
        <div className="purple-container" >
            {props.children}
        </div>
    );
}

export default PurpleBox;