import React from 'react';
import s from './ChatMessage.module.css';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ListItemText from "@mui/material/ListItemText";

const ChatMessage = () => {

    const listMessage = [1, 2, 3];

    return <List sx={{width: '100%', maxWidth: 420}}>
        {listMessage.map((value) => (
            <ListItem
                key={value}
                disableGutters
                secondaryAction={
                    <IconButton aria-label="comment">
                        <CommentIcon/>
                    </IconButton>
                }
            >
                <ListItemText primary={`Line item ${value}`}/>
            </ListItem>
        ))}
    </List>
}

export default ChatMessage;
