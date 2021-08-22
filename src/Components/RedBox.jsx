import './Styles/RedBox.css';

function RedBox(props) {

    const { label } = props;

    return (
        <div className="redbox" >
            <p className="redbox-text">{label}</p>
        </div>
    );
}

export default RedBox;