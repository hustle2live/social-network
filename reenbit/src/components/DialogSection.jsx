import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/MyContext';

import userLogo from '../static/images/user-icon.png';

const generateUniqueKeyId = (name = '') => {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    name
  );
};

const getCurrentTime = () => {
  const date = new Date().toUTCString();
  return `${date.substring(5, 7) +
    '/' +
    date.substring(8, 11) +
    '/' +
    date.slice(14, -4)}`;
};

export const DialogSection = () => {
  const data = useContext(ChatContext);

  const [message, setMessage] = useState('');

  const activeUser = data.currentUser;
  const messageTime = () => getCurrentTime();
  const messageId = () => generateUniqueKeyId();

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const getAnswerMessage = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Что-то пошло не так на API сервере.');
        }
      })
      .then((response) => {
        const userResponseMessage = response.value;

        data.addNewChatMessage(
          userResponseMessage,
          messageTime(),
          messageId(),
          activeUser
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sendMessage = () => {
    const newMessage = message.trim();
    if (!newMessage) return;
    data.addNewChatMessage(newMessage, messageTime(), messageId());
    setMessage('');
    setTimeout(getAnswerMessage, 10000);
  };
  console.log(data);
  // const currentDate = new Date().toString().substring(4, 15);

  return (
    <div className='dialogs'>
      <section className='dialogs__header'>
        <div className='active-user'>
          <img src={userLogo} alt='active user icon' />
          <span className='capitalize'>Active User - {activeUser}</span>
        </div>
      </section>

      <section className='dialogs__dialogs'>
        {data.chatData.map(({ user, messages }) => {
          if (user === data.currentUser) {
            return (
              <div key={user}>
                <p className='message-date'>
                  {messages[messages.length - 1].time}
                </p>
                {messages.map(({ author, text, time, id }) => (
                  <div key={id} className='message'>
                    <p
                      className={author === 'me' ? 'align_right' : 'align_left'}
                    >
                      {text} <span>{time.slice(0, 15)}</span>
                    </p>
                  </div>
                ))}
              </div>
            );
          }
        })}
      </section>

      <section className='dialogs__input-section'>
        <input
          value={message}
          onChange={onChangeHandler}
          placeholder='write a message'
        />
        <button onClick={sendMessage}>Send</button>
      </section>
    </div>
  );
};
