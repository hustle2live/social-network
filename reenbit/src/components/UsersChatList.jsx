import React, { useContext } from 'react';
import { ChatContext } from '../context/MyContext';
import {
  lastMessageInArray,
  dateTimeChatListFormatt,
  upperCaseFirstLetter
} from './helpers';

export const UsersChatList = () => {
  const data = useContext(ChatContext);

  return (
    <div className='chats'>
      <h2>Chats</h2>
      <div className='userChatListDiv'>
        <ul className='userChatList'>
          {data.chatData.map(({ user, messages }) => (
            <li
              key={user}
              className='userChats'
              onClick={(e) => {
                e.currentTarget.parentNode.childNodes.forEach((li) =>
                  li.classList.remove('primary-color')
                );
                e.currentTarget.classList.add('primary-color');
                data.setCurrentUser(user);
              }}
            >
              <h4>{upperCaseFirstLetter(user)}</h4>
              <p className='lastDialogData'>
                {dateTimeChatListFormatt(lastMessageInArray(messages).time)}
              </p>
              <p className='lastDialogMessage capitalize'>
                {lastMessageInArray(messages).author}:{' '}
                {lastMessageInArray(messages).text.slice(0, 20)}...
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
