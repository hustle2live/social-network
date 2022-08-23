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
        dialogDate: '22.08.2020',
        messages: [{ diana: 'Hey Smith' }, { me: 'Hey Diana' }]
      },
      {
        dialogDate: '24.08.2020',
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
  }

  //   chats: [
  //     {
  //       userName: 'ann',
  //       dialogsArray: [
  //         {
  //           dialogDate: '01.03.2022',
  //           dialogMessages: [{ ann: 'hello Smith' }, { me: 'Hi Ann' }]
  //         }
  //       ]
  //     },

  //     {
  //       userName: 'mike',
  //       dialogsArray: [
  //         {
  //           dialogDate: '02.06.2022',
  //           dialogMessages: [{ ann: 'Hi Smith' }, { me: 'Hi mike' }]
  //         }
  //       ]
  //     },

  //     {
  //       userName: 'diana',
  //       dialogsArray: [
  //         {
  //           dialogDate: '22.08.2020',
  //           dialogMessages: [{ ann: 'Hey Smith' }, { me: 'Hey Diana' }]
  //         },
  //         {
  //           dialogDate: '24.08.2020',
  //           dialogMessages: [
  //             { ann: 'may i ask some question' },
  //             { me: 'Hey, feel free to ask any kind of questions...' }
  //           ]
  //         },
  //         {
  //           dialogDate: '03.01.2021',
  //           dialogMessages: [
  //             { ann: 'Hey in 2021' },
  //             { me: 'let go for a walk, Diana' }
  //           ]
  //         }
  //       ]
  //     },

  //     {
  //       userName: 'jessica',
  //       dialogsArray: [
  //         {
  //           dialogDate: '16.08.2019',
  //           dialogMessages: [
  //             { ann: 'good morning Smith' },
  //             { me: 'good morning jessica' }
  //           ]
  //         }
  //       ]
  //     },

  //     {
  //       userName: 'malcolm',
  //       dialogsArray: [
  //         {
  //           dialogDate: '14.07.2019',
  //           messages: [{ ann: 'hello Smith' }, { me: 'Hi malcolm' }]
  //         }
  //       ]
  //     },

  //     {
  //       userName: 'eva',
  //       dialogsArray: [
  //         {
  //           dialogDate: '07.05.2019',
  //           messages: [{ ann: 'hello Smith' }, { me: 'Hello eva' }]
  //         },
  //         {
  //           dialogDate: '10.06.2019',
  //           messages: [{ ann: 'hello Smith' }, { me: 'Hello eva' }]
  //         },
  //         {
  //           dialogDate: '27.12.2019',
  //           messages: [{ ann: 'happy new year Smith' }, { me: 'so to You' }]
  //         }
  //       ]
  //     }
  //   ]
};

const AddNewUser = () => {};

const AddNewMessage = () => {};

export default Data;
