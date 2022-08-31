import React from 'react';
import { ChatContext } from './Context';

import userLogo from '../images/user-icon.png';

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

export const DialogSection = (props) => (
  <ChatContext.Consumer>
    {(data) => {
      const inputRef = React.createRef();
      const activeUser = data.chatData.activeUser;
      const currentDate = new Date().toString().substring(4, 15);

      console.log(...data.chatData.chats[activeUser]);
      // console.log(getCurrentTime());

      const addMessage = () => {
        const newMessage = inputRef.current.value.trim();
        if (!newMessage) return false;
        const messageTime = getCurrentTime();
        const messageId = generateUniqueKeyId();
        data.addNewChatMessage(currentDate, newMessage, messageTime, messageId);
        inputRef.current.value = '';
      };
      return (
        <div className='dialogs'>
          <section className='dialogs__header'>
            <div className='active-user'>
              <img src={userLogo} alt='active user icon' />
              <span className='capitalize'>Active User - {activeUser}</span>
            </div>
          </section>
          <section className='dialogs__dialogs'>
            <div>
              {data.chatData.chats[activeUser].map(
                ({ dialogDate, messages, dialogId }) => {
                  return (
                    <div key={'div' + dialogId + activeUser}>
                      <p key={'p' + dialogId} className='message-date'>
                        {[dialogDate]}
                      </p>
                      {messages.map(({ author, text, time, id }) => {
                        const messageTime = time.slice(0, 15);
                        let textAlign =
                          author === 'me' ? 'align_right' : 'align_left';
                        return (
                          (
                            <div key={dialogId + id} className='message'>
                              <p key={id} className={textAlign}>
                                {text} <span>{messageTime}</span>
                              </p>
                            </div>
                          ) || null
                        );
                      })}
                    </div>
                  );
                }
              )}
            </div>
          </section>
          <section className='dialogs__input-section'>
            <input ref={inputRef} placeholder='write a message' />
            <button onClick={addMessage}>Send</button>
          </section>
        </div>
      );
    }}
  </ChatContext.Consumer>
);
