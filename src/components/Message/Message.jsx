import './Message.css';

function Message(props) {
    return (
        <div className="message">{props.message}</div >
    );
}

export default Message;
