import { Box, Fab, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Person, Send } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, addMessageSaga } from '../store/messages/actions';
import { useParams } from 'react-router-dom'
import {getmessageList} from "../store/messages/selectors";
import {getProfileName} from "../store/profile/selectors";



const ControlPanel = () => {
    const [value, setValue] = useState('');
    // const messages = useSelector(getmessageList);
    const profileName = useSelector(getProfileName);
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, [value]);

    // const sendMessage = (message, author) => {
    //     dispatch(addMessage(chatId, {
    //         text: message,
    //         author: author
    //     }));
    //     setValue('');
    // }

    const handleButton = useCallback(() => {
        // dispatch(addMessage(chatId, {
        dispatch(addMessageSaga(chatId, {
            text: value,
            author: profileName
        }));
        setValue('');
        //sendMessage(value, profileName)
    }, [value, chatId, dispatch]);

    // useEffect(() => {
    //     let timer;
    //     const currentChat = messages[chatId];
    //     if (currentChat?.length > 0 && currentChat[currentChat?.length - 1]?.author === profileName) {
    //         timer = setInterval(() => {
    //             const currentMessage = 'Hi, I\'m a bot';
    //             sendMessage(currentMessage, 'Bot')
    //         }, 1500);
    //     }
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [messages[chatId]]);

    const pressEnter = (e) => {
        if (e.keyCode === 13) {
            handleButton();
            e.preventDefault();
        }
    }

    return (
        <div>
            <Box
                sx={{
                    marginTop: '20px'
                }}
                component='form'
                noValidate
                autoComplete='off'
                flexDirection='row'
                justifyContent='space-between'
            >
                <TextField
                    autoFocus
                    onKeyDown={pressEnter}
                    style={{ margin: '0 20px'}}
                    sx={{
                        input: { color: 'black', backgroundColor: 'white' },
                        label:{backgroundColor: 'white' },

                    }}
                    id='outlined-basic'
                    label='Enter a message'
                    variant='filled'
                    value={value}
                    onChange={handleChange}
                />
                <Fab onClick={handleButton}>
                    <Send />
                </Fab>
            </Box>
        </div>
    )

}

export default ControlPanel;