import { Box, Fab, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Person, Send } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, addMessageSaga } from '../store/messages/actions';
import { useParams } from 'react-router-dom'
// import {getmessageList} from "../store/messages/selectors";
import {getProfileName} from "../store/profile/selectors";
import { getDatabase, ref, push, set } from 'firebase/database'
import firebase from '../service/firebase';


const ControlPanel = () => {
    const [value, setValue] = useState('');
    // const messages = useSelector(state => state.messages.messageList);
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

    /*lesson 8
    const handleButton = useCallback(() => {

        dispatch(addMessageSaga(chatId, {
            text: value,
            author: profileName
        }));
        setValue('');

    }, [value, chatId, dispatch]);
    */

    //Реализация добавление сообщения бота через таймер
    // useEffect(() => {
    //     let timer;
    //     const currentChat = messages[chatId];
    //     if (currentChat?.length > 0 && currentChat[currentChat?.length - 1]?.author === profileName) {
    //         timer = setInterval(() => {
    //             const currentMessage = 'hi human';
    //             sendMessage(currentMessage, 'bender')
    //         }, 1500);
    //     }
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [messages[chatId]]);


    const handleButton = useCallback(() => {
        const message = {
            text: value,
            author: profileName
        };
        const db = getDatabase(firebase);
        const messageRef = ref(db, `/messages/${chatId}`);
        const newMessageRef = push(messageRef);
        set(newMessageRef, message).then((res) => console.log(res));
        setValue('');
    }, [value, chatId]);


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