import { Link, useParams } from "react-router-dom";
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDataFromFireBase } from '../store/middleware'
import { fbDeleteChat, fbAddChat } from "../store/chats/actions";
import {getChatListMessages} from "../store/messages/selectors";
import {Delete} from "@mui/icons-material";

const ChatList = () => {
    const dispatch = useDispatch();
    let fbChats = useSelector(state => state.fbChats);;
    const message = useSelector(getChatListMessages);
    const [chats, setChats] = useState([]);
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');


    const handleOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        dispatch(fbAddChat(newChatName));
        dispatch(getDataFromFireBase());
        setNewChatName('');
        handleClose();
    }

    const pressEnter = (e) => {
        if (e.keyCode === 13) {
            onAddChat();
            e.preventDefault();
        }
        if (e.keyCode === 32) {
            console.log(fbChats);
            console.log('hello');
            //console.log(message);
        }
    }

    const handlerDelete = (id) => {
        dispatch(fbDeleteChat(id));
        dispatch(getDataFromFireBase());
    };

    useEffect(() => {
        console.log(fbChats);
        setChats(fbChats);
    }, [fbChats]);

    return (
        <div className="chatList">
            {chats.map((chat, index) => (
                <div key={index}>
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{ color: chat.id === chatId ? 'black' : 'grey' }}>
                            {chat.name}
                        </b>
                        <button onClick={() => handlerDelete(chat.id)}>
                                <Delete></Delete>
                        </button>
                    </Link>
                </div>
            ))}
            <div>
                <Button onClick={handleOpen}>Add chat</Button>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Please write a chat name</DialogTitle>
                    <div className="chatNameBox">
                        <TextField autoFocus onKeyDown={pressEnter} value={newChatName} onChange={handleChange} />
                        <Button onClick={onAddChat} disabled={!newChatName}>Add chat</Button>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default ChatList