import React, { useState, createContext } from 'react';
import Data from './Data';

export const ChatContext = createContext();

// console.log();

const MyContext = (props) => {
  const [chatData, setChatData] = useState(Data);
  const [currentUser, setCurrentUser] = useState(chatData.activeUser);
  const changeUser = (name) => setCurrentUser((chatData.activeUser = name));

  const addNewChatMessage = (currentDate, message, sendTime, uid) => {
    const userName = currentUser;
    const newData = Object.assign({}, chatData);
    const currentUserChat = newData.chats[userName];

    if (currentUserChat.some(({ dialogDate }) => dialogDate === currentDate)) {
      currentUserChat.forEach(({ dialogDate, messages, dialogId }) => {
        if (dialogDate === currentDate) {
          messages.push({
            author: 'me',
            text: message,
            time: sendTime,
            id: uid
          });
        }
      });
    } else {
      currentUserChat.push({
        dialogDate: currentDate,
        dialogId: currentDate + uid + userName,
        messages: [
          {
            author: 'me',
            text: message,
            time: sendTime,
            id: uid
          }
        ]
      });
    }
    return setChatData(newData);
  };

  const dataValue = { chatData, changeUser, addNewChatMessage };

  return (
    <ChatContext.Provider value={dataValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default MyContext;
