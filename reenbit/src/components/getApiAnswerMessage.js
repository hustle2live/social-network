import { generateUniqueId, getCurrentTime } from './helpers.js';

export const getApiAnswerMessage = (activeUser, addNewChatMessage) => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Что-то пошло не так на API сервере.');
      }
    })
    .then((response) => {
      const userResponseMessage = response.value;
      if (userResponseMessage)
        addNewChatMessage(
          userResponseMessage,
          getCurrentTime(),
          generateUniqueId(),
          activeUser
        );
    })
    .catch((error) => {
      console.error(error);
    });
};
