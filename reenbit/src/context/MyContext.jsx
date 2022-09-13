import React, { useState, createContext } from 'react';
import { mockData } from './mockData';
import { lastMessageInArray } from '../components/helpers';

export const ChatContext = createContext(mockData);

const MyContext = (props) => {
  const chatData =
    JSON.parse(window.localStorage.getItem('mockData')) || mockData;

  const writeToLocalStorage = (dataFile) =>
    window.localStorage.setItem('mockData', JSON.stringify(dataFile));

  chatData.sort(
    (a, b) =>
      Date.parse(lastMessageInArray(b.messages).time) -
      Date.parse(lastMessageInArray(a.messages).time)
  );

  writeToLocalStorage(chatData);

  const [currentUser, setCurrentUser] = useState('');
  const [newChatMessage, setNewMessageState] = useState('');

  const addNewChatMessage = (message, sendTime, uid, messageAuthor = 'me') =>
    chatData.map(({ user, messages }) => {
      if (user === currentUser) {
        const newUserMessage = {
          author: messageAuthor,
          text: message,
          time: sendTime,
          id: uid
        };
        messages.push(newUserMessage);
        setNewMessageState(message);
        writeToLocalStorage(chatData);
      }
    });

  const dataValue = {
    chatData,
    currentUser,
    setCurrentUser,
    addNewChatMessage,
    setNewMessageState
  };

  return (
    <ChatContext.Provider value={dataValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default MyContext;
