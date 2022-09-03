import React, { useContext } from 'react';
import { ChatContext } from '../context/MyContext';

export const UsersChatList = () => {
  const data = useContext(ChatContext);
  return (
    <div className='chats'>
      <h2>Chats</h2>
      <div className='userChatListDiv'>
        <ul className='userChatList'>
          {data.chatData.map(({ user, messages }) => {
            const userChatLastMessage = messages[messages.length - 1];
            return (
              <li
                key={user}
                className='userChats'
                onClick={() => {
                  data.setCurrentUser(user);
                }}
              >
                <h4>{user}</h4>
                <p className='lastDialogData'>{userChatLastMessage.time}</p>
                <p className='lastDialogMessage'>
                  {userChatLastMessage.author}:{' '}
                  {userChatLastMessage.text.slice(0, 20)}...
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
