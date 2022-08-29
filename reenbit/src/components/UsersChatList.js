import React from 'react';
import { ChatContext } from './Context';

export const UsersChatList = (props) => (
  <ChatContext.Consumer>
    {(data) => (
      <div className='chats'>
        <h2>This is a Chat'sList</h2>
        <div className='userChatListDiv'>
          <ul className='userChatList'>
            {data.chatData.users.map((name, index) => {
              let counter = 1;
              const lastUserChats = [...data.chatData.chats[name]].reverse()[0];
              return (
                <li
                  key={index + counter++}
                  className='userChats'
                  onClick={() => {
                    data.changeUser(name);
                    // console.log(data.chatData.activeUser);
                  }}
                >
                  <h4 key={counter + index + name + 'h4'}>{name}</h4>
                  <p
                    key={counter + index + name + 'p01'}
                    className='lastDialogData'
                  >
                    {lastUserChats.dialogDate}
                  </p>
                  <p
                    key={counter + index + name + 'p02'}
                    className='lastDialogMessage'
                  >
                    {[...lastUserChats.messages].reverse()[0]['me'] ||
                      [...lastUserChats.messages].reverse()[0][name]}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )}
  </ChatContext.Consumer>
);
