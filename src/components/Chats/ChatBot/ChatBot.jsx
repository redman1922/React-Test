import React, {useEffect, useState} from 'react';
import s from "./ChatBot.module.css";

import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const ChatBot = () => {
    const [messageList, setMessageList] = useState([]);

    //Закидываем в список значение из инпутов.
    const changeMessageList = (newMessage) => {
        setMessageList([...messageList, newMessage]);
    };

    //Инпуты.
    const [Message, setMessage] = useState({
        Author: "",
        Text: "",
    });

    //Берём значение автора из инпута.
    const handleChangeAuthor = (e) => {
        setMessage({...Message, Author: e.target.value});
    };

    //Берём значение сообщение из инпута.
    const handleChangeMessage = (e) => {
        setMessage({...Message, Text: e.target.value});
    };

    //Обработчик отправки данных формы.
    const handleSubmit = () => {
        changeMessageList(Message);
        setMessage({Author: "", Text: ""});
    };

    //Вызов сообщение при изменении списка.
    useEffect(() => {
        if (messageList.length !== 0) {
            const timer = setTimeout(() => {
                alert(
                    "сообщение от " +
                    messageList[messageList.length - 1].Author +
                    " отправленно"
                );
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [messageList]);

    return <div>
        <div>
            <h2 className={s.text_window_pos}>Chat window</h2>
            <div>
                {messageList.map((el, i) => {
                    return (
                        <div className={s.list_position} key={i}>
                            <div>{el.Author}</div>
                            <div>{el.Text}</div>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className={s.margin_form}>
            <Input
                type="text"
                placeholder="author"
                onChange={handleChangeAuthor}
                value={Message.Author}
                autoFocus={true}
                sx={{
                    color: 'black',
                    margin:'40px 0 0 0'
                }}
            />
            <Input
                type="text"
                placeholder="Input message"
                onChange={handleChangeMessage}
                value={Message.Text}
                sx={{
                    color: 'black',
                    margin:'0 0 40px 0'
                }}
            />
            <Button variant="contained"
                    onClick={handleSubmit}>
                Send
            </Button>
        </div>
        <div className={s.button_pos}>
            <FormControlLabel control={<Switch/>} label="Switch"/>
        </div>
    </div>
}

export default ChatBot;