import { DialogSection } from './components/DialogSection.js';
import { Favourites } from './components/FavouriteSection.js';
import { UsersChatList } from './components/UsersChatList.js';

import './App.css';

function App() {
  return (
    <div className='main-container'>
      <Favourites />
      <DialogSection />
      <UsersChatList />
    </div>
  );
}

export default App;
