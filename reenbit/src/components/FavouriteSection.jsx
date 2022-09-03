import React, { useContext } from 'react';
import { ChatContext } from '../context/MyContext';

export const Favourites = () => {
  const data = useContext(ChatContext);
  // console.log(data);
  return (
    <div className='favourites'>
      <div>
        <h3>Pin user</h3>
        <p className='capitalize'>{data.currentUser}</p>
      </div>
    </div>
  );
};
