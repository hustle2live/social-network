import React, { useState, createContext, useEffect } from 'react';
import { mockData } from './mockData';

export const ChatContext = createContext(mockData);

const MyContext = (props) => {
  const chatData = mockData;
  const [currentUser, setCurrentUser] = useState(chatData[0].user);
  const [newChatMessage, doWeHaveNewChatMessage] = useState('');

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

        doWeHaveNewChatMessage(message);
      }
    });

  const dataValue = {
    chatData,
    currentUser,
    setCurrentUser,
    addNewChatMessage
  };

  return (
    <ChatContext.Provider value={dataValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default MyContext;
