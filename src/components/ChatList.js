import { Link, useParams } from "react-router-dom";

import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useSelector } from 'react-redux'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat, delChat } from '../store/chats/actions'
import { delChatMessages } from '../store/messages/actions'
import {getChatList} from "../store/chats/selectors";
import {getChatListMessages} from "../store/messages/selectors";

const ChatList = () => {
    const chats = useSelector(getChatList);
    const message = useSelector(getChatListMessages);
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [newChatName, setNewChatName] = useState('');
    const [delChatName, setDelChatName] = useState('');
    const dispatch = useDispatch();

    const handleOpen = () => {
        setVisible(true);
    };

    const handleOpenDelete = () => {
        setVisibleDelete(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleCloseDelete = () => {
        setVisibleDelete(false);
    };

    const handleChange = (e) => setNewChatName(e.target.value);
    const delHandleChange = (e) => setDelChatName(e.target.value);

    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName('');
        handleClose();
    }

    const onDeleteChat = () => {

        dispatch(delChat(delChatName));
        let delChatId;
        delChatId = chats.find((f) => {
            if (f.name === delChatName) return f.id;
        });
        dispatch(delChatMessages(delChatId));
        setDelChatName('');
        handleCloseDelete();
    }

    const pressEnter = (e) => {
        if (e.keyCode === 13) {
            onAddChat();
            e.preventDefault();
        }
        if (e.keyCode === 32) {
            console.log(chats);
            console.log(message);
        }
    }

    return (
        <div className="chatList">
            {chats.map((chat, index) => (
                <div key={index}>
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{ color: 'black', opacity: chat.id === chatId ? '0.6' : '1' }}>
                            {chat.name}
                        </b>
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
                <Button onClick={handleOpenDelete}>Delete chat</Button>
                <Dialog open={visibleDelete} onClose={handleCloseDelete}>
                    <DialogTitle>Enter the name of the chat to be deleted</DialogTitle>
                    <div className="chatNameBox">
                        <TextField autoFocus value={delChatName} onChange={delHandleChange} />
                        <Button onClick={onDeleteChat} disabled={!delChatName}>Delete chat</Button>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default ChatList