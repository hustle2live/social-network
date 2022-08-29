import React from 'react';
import { ChatContext } from './Context';

export const Favourites = (props) => (
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
