export const generateUniqueId = (name = '') =>
  (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    name
  );

export const lastMessageInArray = (arr) => arr[arr.length - 1];

export const getCurrentTime = () => new Date().toString();

export const dateTimeMessageFormatt = (date) =>
  `${date.substring(4, 7)}/${date.substring(8, 10)}/${date.substring(13, 24)}`;

export const dateTimeChatListFormatt = (date) =>
  `${date.slice(4, 10)},${date.slice(11, 15)}`;

export const insertMarkText = (str, pos, len) =>
  str.slice(0, pos) +
  '<mark>' +
  str.slice(pos, pos + len) +
  '</mark>' +
  str.slice(pos + len);

export const upperCaseFirstLetter = (str) =>
  str[0].toUpperCase() + str.slice(1);
