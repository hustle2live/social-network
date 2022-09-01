import React from 'react';
import { ChatContext } from '../context/MyContext';

export const Favourites = () => (
  <ChatContext.Consumer>
    {(data) => {
      return (
        <div className='favourites'>
          <div>
            <h3>Pin user</h3>
            <p>{data.chatData.activeUser}</p>
          </div>
        </div>
      );
    }}
  </ChatContext.Consumer>
);
