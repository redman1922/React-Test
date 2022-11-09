import logo from './logo.svg';
import './App.css';

import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';



import { useState, useEffect } from 'react';



function App() {

  //Вывод списка.
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
    setMessage({ ...Message, Author: e.target.value });
  };

  //Берём значение сообщение из инпута.
  const handleChangeMessage = (e) => {
    setMessage({ ...Message, Text: e.target.value });
  };

  //Обработчик отправки данных формы.
  const handleSubmit = () => {
    changeMessageList(Message);
    setMessage({ Author: "", Text: "" });
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


  return (
    <div className="App">
      <header className="App-header">
        <div className='flex-header'>
          {/* <List>
            <ListItem>
              <ListItemText>1</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>2</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>3</ListItemText>
            </ListItem>
          </List> */}

          <List sx={{ width: '100%', maxWidth: 360 }}>
            {[1, 2, 3].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`Line item ${value}`} />
              </ListItem>
            ))}
          </List>

          <div>
            <h4>Chat window</h4>
            <div >
              {messageList.map((el, i) => {
                return (
                  <div className='list-position' key={i} >
                    <div >{el.Author}</div>
                    <div >{el.Text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <div className='margin-form'>
          <Input
            type="text"
            placeholder="author"
            onChange={handleChangeAuthor}
            value={Message.Author}
            autoFocus="true"
            sx={{
              color: 'white',
            }}
          />
          <Input
            type="text"
            placeholder="Input message"
            onChange={handleChangeMessage}
            value={Message.Text}
            sx={{
              color: 'white',
            }}
          />
          <Button variant="contained"
            onClick={handleSubmit}>
            Send
          </Button>
        </div>
        <FormControlLabel control={<Switch />} label="Switch" />
      </header>

    </div>

  );
}

export default App;