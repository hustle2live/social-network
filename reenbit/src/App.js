import React from 'react';

import { DialogSection } from './components/DialogSection.js';
import { Favourites } from './components/FavouriteSection.js';
import { UsersChatList } from './components/UsersChatList.js';

import { ChatContext } from './components/Context';

import './App.css';

const App = (props) => {
  return (
    <ChatContext.Consumer>
      {(data) => {
        if (!data.chatData.activeUser) data.changeUser(data.chatData.users[0]);
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
};

export default App;
