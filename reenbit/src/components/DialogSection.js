import React from 'react';
import { ChatContext } from './Context';

import userLogo from '../images/user-icon.png';

export const DialogSection = (props) => (
  <ChatContext.Consumer>
    {(data) => {
      const inputRef = React.createRef();
      const activeUser = data.chatData.activeUser || data.chatData.users[2];
      const currentDate = new Date().toString().substring(4, 15);
      const addMessage = () => {
        const newMessage = inputRef.current.value;
        data.addNewChatMessage(currentDate, newMessage);
        inputRef.current.value = '';
      };
      return (
        <div className='dialogs'>
          <section className='dialogs__header'>
            <div className='active-user'>
              <img src={userLogo} alt='active user icon' />
              <span className='capitalize'>
                Active User - {data.chatData.activeUser}
              </span>
            </div>
          </section>
          <section className='dialogs__dialogs'>
            <div>
              {data.chatData.chats[activeUser].map(
                ({ dialogDate, messages }) => {
                  let counter = 1;
                  return (
                    <div key={'divsf' + counter++}>
                      <p key={counter + 'p0_01'} className='message-date'>
                        {[dialogDate]}
                      </p>
                      {messages.map((msg) => {
                        return msg['me'] ? (
                          <p key={counter + 'p1_01'} className='align_right'>
                            {msg['me']}
                          </p>
                        ) : (
                          (
                            <p key={counter + 'p2_01'} className='align_left'>
                              {msg[activeUser]}
                            </p>
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
