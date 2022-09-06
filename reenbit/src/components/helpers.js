export const generateUniqueKeyId = (name = '') =>
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
