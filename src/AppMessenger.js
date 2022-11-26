import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import UnstyledInput from './mu_input';

import './App.scss';
import MessageList from './components/MessageList';

function AppMessenger() {
  const [messages, setMessage] = useState([]);
  const [input, setInput] = useState({});


  useEffect(() => {
    let timer;
    timer = setInterval(function () {
      if (messages.length != 0) {
        if (messages[messages.length - 1].author === "human") {
          let arr = [];
          arr = messages.slice();
          arr.push({ text: "Greetings man", author: "robot", id: messages.length });
          setMessage(arr);
        }
      }
    }, 1500);
    return () => {
      clearInterval(timer);
    }
  }, [messages])


  const handlerBtn = () => {
    console.log(input);
    input.id = messages.length;
    console.log(input.text);
    // setMessage(...messages, { text: input.text, author: input.author, id: input.id });
    setMessage([...messages, { text: input.text, author: input.author, id: input.id }]);
    console.log(messages);
    // setMessage((preMessage) => {
    //   let arr = [];
    //   input.id = preMessage.length;
    //   arr = preMessage.slice();
    //   let test = { ...input };
    //   arr.push(test);
    //   return preMessage = arr.slice();
    // })

  }
  const f = (e) => {
    setInput({ text: e.target.value, author: "human" })
  }

  return (
    <div className="App">
      <div className='container'>
        <MessageList messages={messages} />
        {/* <div className='messages_space'>
          {messages.map((message, id) => (
            <div className={`messages_${message.author === 'human' ? 'human' : 'robot'}`} key={message.id}>
              {message.text} - say: {message.author}
            </div>
          ))}
        </div> */}
        <div className='messages_toolbar'>
          <div>
            <UnstyledInput myEvent={f}></UnstyledInput>
          </div>

          {/* <input type="text" placeholder="your text" onChange={e => setInput({ text: e.target.value, author: "human" })} /> */}
          <div>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handlerBtn}>Send</Button>
          </div>
        </div>

      </div>

    </div >

  );
}

export default AppMessenger;
