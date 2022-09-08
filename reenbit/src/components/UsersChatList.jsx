import React, { useContext } from 'react';
import { ChatContext } from '../context/MyContext';
import { lastMessageInArray, dateTimeChatListFormatt } from './helpers';

export const UsersChatList = () => {
  const data = useContext(ChatContext);

  const upperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

  const UserList = () =>
    data.chatData.map(({ user, messages }) => (
      <li
        key={user}
        className='userChats'
        onClick={() => {
          data.setCurrentUser(user);
        }}
      >
        <h4>{upperFirstLetter(user)}</h4>
        <p className='lastDialogData'>
          {dateTimeChatListFormatt(lastMessageInArray(messages).time)}
        </p>
        <p className='lastDialogMessage'>
          {lastMessageInArray(messages).author}:{' '}
          {lastMessageInArray(messages).text.slice(0, 20)}...
        </p>
      </li>
    ));

  return (
    <div className='chats'>
      <h2>Chats</h2>
      <div className='userChatListDiv'>
        <ul className='userChatList'>
          <UserList />
        </ul>
      </div>
    </div>
  );
};
