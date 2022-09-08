import React, { useContext, useState } from 'react';
import { ChatContext } from '../context/MyContext';

export const Favourites = () => {
  const data = useContext(ChatContext);
  const [searchMessage, setSearchMessage] = useState('');

  const insertMark = (str, pos, len) =>
    str.slice(0, pos) +
    '<mark>' +
    str.slice(pos, pos + len) +
    '</mark>' +
    str.slice(pos + len);

  const startSearchInChatNames = (message) => {
    const chatsElements = document.querySelectorAll('.userChats');

    chatsElements.forEach((item) => {
      const elem = item.childNodes[0];
      const showElem = (item, elem) => {
        item.classList.remove('hide');
        elem.innerHTML = elem.innerText;
      };
      const hideElem = (item, elem) => {
        item.classList.add('hide');
        elem.innerHTML = elem.innerText;
      };

      if (message.trim() !== '') {
        if (elem.innerText.search(message) === -1) {
          hideElem(item, elem);
        } else {
          showElem(item, elem);
          elem.innerHTML = insertMark(
            elem.innerText,
            elem.innerText.search(message),
            message.length
          );
        }
      } else {
        showElem(item, elem);
      }
    });
  };

  const onSearchChangeHandler = (e) => {
    const val = e.target.value;
    setSearchMessage(val);
    startSearchInChatNames(val);
  };

  return (
    <div className='favourites'>
      <div>
        <h3>Pin user</h3>
        <p className='capitalize'>{data.currentUser}</p>
      </div>
      <div className='search-section'>
        <label htmlFor='live_search'>search</label>
        <input
          value={searchMessage}
          onChange={onSearchChangeHandler}
          type='text'
          id='live_search'
        />
      </div>
    </div>
  );
};
