import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/MyContext';
import { getApiAnswerMessage } from './getApiAnswerMessage';
import {
  generateUniqueId,
  getCurrentTime,
  dateTimeMessageFormatt,
  dateTimeChatListFormatt
} from './helpers.js';

import userLogo from '../static/images/user-icon.png';

export const DialogSection = () => {
  const data = useContext(ChatContext);
  const [message, setMessage] = useState('');

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const newMessage = message.trim();
    if (!newMessage) return;
    data.addNewChatMessage(newMessage, getCurrentTime(), generateUniqueId());
    setTimeout(
      () => getApiAnswerMessage(data.currentUser, data.addNewChatMessage),
      10000
    );
    setMessage('');
  };

  const UserChatHistory = () =>
    data.chatData.map(({ user, messages }) =>
      user === data.currentUser ? (
        <div key={user}>
          <p className='message-date'>
            {dateTimeChatListFormatt(messages[0].time)}
          </p>
          {messages.map(({ author, text, time, id }) => (
            <div key={id} className='message'>
              <p className={author === 'me' ? 'align_right' : 'align_left'}>
                {text} <span>{dateTimeMessageFormatt(time)}</span>
              </p>
            </div>
          ))}
        </div>
      ) : null
    );

  return (
    <div className='dialogs'>
      <section className='dialogs__header'>
        <button className='back-btn' onClick={() => data.setCurrentUser('')}>
          <span class='material-symbols-rounded'>arrow_back</span>
        </button>
        <div className='active-user'>
          <img src={userLogo} alt='active user icon' />
          <span className='capitalize'>{data.currentUser}</span>
        </div>
      </section>
      <section className='dialogs__dialogs'>
        <UserChatHistory />
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
