import React, { useContext } from 'react';
import { ChatContext } from './context/MyContext';

import { DialogSection } from './components/DialogSection.jsx';
import { Favourites } from './components/FavouriteSection.jsx';
import { UsersChatList } from './components/UsersChatList.jsx';

import './App.css';

const App = () => {
  const data = useContext(ChatContext);

  return (
    <div
      className={
        data.currentUser
          ? 'main-container mobileUser'
          : 'main-container mobileList'
      }
    >
      <Favourites />
      <DialogSection />
      <UsersChatList />
    </div>
  );
};

export default App;
