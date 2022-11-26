import React from 'react';
import { useCallback } from 'react'
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Box, ListItemAvatar, Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getmessageList} from "../store/messages/selectors";


const MessageList = () => {
    const messages = useSelector(getmessageList);
    let { chatId } = useParams();
    const getMessagesById = messages[chatId];

    const renderMessage = useCallback((message, index) => {
        return (
            <ListItem

                key={index}
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: message.author === 'bot' ? 'green' : '#1d46ad' }}>

                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={message.text} secondary={message.author} />
            </ListItem>
        )
    }, []);


    return (
        <Box
            sx={{
                width: 300,
                height: 600,
                border: '1px solid #ccc',
                overflow: 'auto',
                bgcolor:'white'
            }}>
            <List sx={{ mb: 2 }}>
                {getMessagesById?.map((message, index) => renderMessage(message, index))}
            </List>
        </Box>

    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
        id: PropTypes.number

    }))
}

export default MessageList