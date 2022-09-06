import React from 'react';

import { DialogSection } from './components/DialogSection.jsx';
import { Favourites } from './components/FavouriteSection.jsx';
import { UsersChatList } from './components/UsersChatList.jsx';

import './App.css';

const App = () => (
  <div className='main-container'>
    <Favourites />
    <DialogSection />
    <UsersChatList />
  </div>
);

export default App;
