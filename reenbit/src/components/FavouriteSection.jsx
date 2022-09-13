import React, { useContext, useState } from 'react';
import { insertMarkText } from './helpers';
import { ChatContext } from '../context/MyContext';

import userIcon from '../static/images/user-icon.png';

export const Favourites = () => {
  const data = useContext(ChatContext);
  const [searchMessage, setSearchMessage] = useState('');

  const searchInChatNames = (message) => {
    const chatsElements = document.querySelectorAll('.userChats');

    chatsElements.forEach((item) => {
      const elem = item.childNodes[0];

      const showElem = () => {
        item.classList.remove('hide');
        elem.innerHTML = elem.innerText;
      };

      const hideElem = () => {
        item.classList.add('hide');
        elem.innerHTML = elem.innerText;
      };

      if (message.trim() !== '') {
        if (elem.innerText.toLowerCase().search(message.toLowerCase()) === -1)
          hideElem();
        else {
          showElem();
          elem.innerHTML = insertMarkText(
            elem.innerText,
            elem.innerText.toLowerCase().search(message.toLowerCase()),
            message.length
          );
        }
      } else showElem();
    });
  };

  const onSearchChangeHandler = (e) => {
    const val = e.target.value || '';
    setSearchMessage(val);
    searchInChatNames(val);
  };

  return (
    <div className='favourites'>
      <div className='pin-section'>
        <div>
          <img src={userIcon} alt='favourites users and chats' />
          <p className='capitalize'>{data.currentUser}</p>
        </div>
      </div>
      <div className='search-section'>
        <label htmlFor='live_search'>search</label>
        <input
          value={searchMessage}
          onChange={onSearchChangeHandler}
          type='text'
          id='live_search'
        />
        <button
          className={searchMessage ? 'clear-btn' : 'clear-btn hidden'}
          onClick={onSearchChangeHandler}
        >
          <span className='material-symbols-rounded'>cancel</span>
        </button>
      </div>
    </div>
  );
};
