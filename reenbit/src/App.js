import React from 'react';

import { DialogSection } from './components/DialogSection.js';
import { Favourites } from './components/FavouriteSection.js';
import { UsersChatList } from './components/UsersChatList.js';

import { ChatContext } from './context/MyContext';

import './App.css';

const App = () => (
  <ChatContext.Consumer>
    {(data) => {
      if (!data.chatData.activeUser)
        data.changeUser(Object.keys(data.chatData.chats)[0]);
      return (
        <div className='main-container'>
          <Favourites />
          <DialogSection />
          <UsersChatList />
        </div>
      );
    }}
  </ChatContext.Consumer>
);

export default App;
