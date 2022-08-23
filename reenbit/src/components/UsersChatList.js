import data from './Data.js';

export const UsersChatList = () => {
  return (
    <div className='chats'>
      <h2>This is a Chat'sList</h2>
      <ul>
        {data.users.map((name, index) => {
          const lastUserChats = [...data.chats[name]].reverse()[0];

          return (
            <li key={index} className='userChats'>
              <h4>{name}</h4>
              <p className='lastDialogData'>{lastUserChats.dialogDate}</p>
              <p className='lastDialogMessage'>
                {[...lastUserChats.messages].reverse()[0]['me'] ||
                  [...lastUserChats.messages].reverse()[0][name]}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// {customers.map(({ name, companyName, phone1, email, id }) => {
//   return (
//     <tr key={id}>
//       <td>{name}</td>
//       <td>{companyName}</td>
//       <td>{phone1}</td>
//       <td>{email}</td>
//     </tr>
//   );
// })}

{
  /* <li>
          <p>Chat One</p>
        </li>
        <li>
          <p>Chat Two</p>
        </li>
        <li>
          <p>Chat Three</p>
        </li>
        <li>
          <p>Chat Four</p>
        </li>
        <li>
          <p>Chat Five</p>
        </li>
        <li>
          <p>etc...</p>
        </li> */
}
