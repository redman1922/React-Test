import logo from './logo.svg';
import './App.css';

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

        <img src={logo} className="App-logo" alt="logo" />
        <div >
          <input
            type="text"
            placeholder="author"
            onChange={handleChangeAuthor}
            value={Message.Author}
          />
          <input
            type="text"
            placeholder="message"
            onChange={handleChangeMessage}
            value={Message.Text}
          />
          <button
            onClick={handleSubmit}>
            Send
          </button>
        </div>
      </header>

    </div>

  );
}

export default App;