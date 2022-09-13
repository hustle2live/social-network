import React, { useContext } from 'react';
import { ChatContext } from './context/MyContext';

import { DialogSection } from './components/DialogSection.jsx';
import { Favourites } from './components/FavouriteSection.jsx';
import { UsersChatList } from './components/UsersChatList.jsx';

import './App.css';

const App = () => {
  const data = useContext(ChatContext);

  const mobileScreenGrid = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 450) return;
    const mainContainer = document.querySelector('.main-container');
    const backButton = document.querySelector('.back-btn');

    console.log(data.currentUser);

    if (data.currentUser) console.log(mainContainer);

    // .style.gridTemplateColumns = '1% 90%';
  };

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
