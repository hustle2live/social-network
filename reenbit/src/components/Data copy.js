// import React, { useState, useContext } from 'react';

const Data = {
  users: ['ann', 'mike', 'diana', 'jessica', 'malcolm', 'eva'],

  chats: {
    ann: [
      {
        dialogDate: '01.03.2022',
        messages: [{ ann: 'hello Smith' }, { me: 'Hi Ann' }]
      }
    ],

    diana: [
      {
        dialogDate: '22.12.2020',
        messages: [{ diana: 'Hey Smith' }, { me: 'Hey Diana' }]
      },
      {
        dialogDate: '24.12.2020',
        messages: [
          { diana: 'may i ask some question' },
          { me: 'Hey, feel free to ask any kind of questions...' }
        ]
      },
      {
        dialogDate: '03.01.2021',
        messages: [{ diana: 'Hey in 2021' }, { me: 'let go for a walk, Diana' }]
      }
    ],

    mike: [
      {
        dialogDate: '02.06.2022',
        messages: [{ mike: 'Hi Smith' }, { me: 'Hi mike' }]
      },
      {
        dialogDate: '03.06.2022',
        messages: [{ mike: 'Hi asdsad asd ' }, { me: 'Hi aasdwad' }]
      },
      {
        dialogDate: '04.06.2022',
        messages: [{ mike: 'Hi Aad DWD wDW' }, { me: 'Hi 12313421 214 ' }]
      },
      {
        dialogDate: '06.06.2022',
        messages: [{ mike: '123w e12ewq , Smith' }, { me: 'Hi3423  5651256' }]
      }
    ],

    jessica: [
      {
        dialogDate: '16.08.2019',
        messages: [
          { jessica: 'good morning Smith' },
          { me: 'good morning jessica' }
        ]
      }
    ],
    malcolm: [
      {
        dialogDate: '14.07.2019',
        messages: [{ malcolm: 'hello Smith' }, { me: 'Hi malcolm' }]
      }
    ],
    eva: [
      {
        dialogDate: '07.05.2019',
        messages: [{ eva: 'hello Smith' }, { me: 'Hello eva' }]
      },
      {
        dialogDate: '10.06.2019',
        messages: [{ eva: 'hello Smith' }, { me: 'Hello eva' }]
      },
      {
        dialogDate: '27.12.2019',
        messages: [{ eva: 'happy new year Smith' }, { me: 'so to You' }]
      }
    ]
  },
  activeUser: false
  // changeUser: (elemName) => elemName
};

const AddNewUser = () => {};

export const ChangeActiveUser = (userName) => {
  Data.activeUser = userName;
};

export const AddNewMessage = (userName, currentDate, message) => {
  if (
    Data.chats[userName].some(({ dialogDate }) => dialogDate === currentDate)
  ) {
    Data.chats[userName].forEach(({ dialogDate, messages }) => {
      if (dialogDate === currentDate) {
        messages.push({ me: message });
        console.log(currentDate + ' is includes');
      }
    });
  } else {
    Data.chats[userName].push({
      dialogDate: currentDate,
      messages: [{ me: message }]
    });
  }
  return Data;
};

export default Data;

ChangeActiveUser(Data.users[2]);

// ann: [
//   {
//     dialogDate: '01.03.2022',
//     messages: [{ ann: 'hello Smith' }, { me: 'Hi Ann' }]
//   }
// ],

// diana: [
//   {
//     dialogDate: '22.12.2020',
//     messages: [{ diana: 'Hey Smith' }, { me: 'Hey Diana' }]
//   },
//   {
//     dialogDate: '24.12.2020',
//     messages: [
//       { diana: 'may i ask some question' },
//       { me: 'Hey, feel free to ask any kind of questions...' }
//     ]
//   },
//   {
//     dialogDate: '03.01.2021',
//     messages: [{ diana: 'Hey in 2021' }, { me: 'let go for a walk, Diana' }]
//   }
// ],

// mike: [
//   {
//     dialogDate: '02.06.2022',
//     messages: [{ mike: 'Hi Smith' }, { me: 'Hi mike' }]
//   },
//   {
//     dialogDate: '03.06.2022',
//     messages: [{ mike: 'Hi asdsad asd ' }, { me: 'Hi aasdwad' }]
//   },
//   {
//     dialogDate: '04.06.2022',
//     messages: [{ mike: 'Hi Aad DWD wDW' }, { me: 'Hi 12313421 214 ' }]
//   },
//   {
//     dialogDate: '06.06.2022',
//     messages: [{ mike: '123w e12ewq , Smith' }, { me: 'Hi3423  5651256' }]
//   }
// ],

// jessica: [
//   {
//     dialogDate: '16.08.2019',
//     messages: [
//       { jessica: 'good morning Smith' },
//       { me: 'good morning jessica' }
//     ]
//   }
// ],
// malcolm: [
//   {
//     dialogDate: '14.07.2019',
//     messages: [{ malcolm: 'hello Smith' }, { me: 'Hi malcolm' }]
//   }
// ],
