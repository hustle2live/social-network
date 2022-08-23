import userLogo from '../images/user-icon.png';

export const DialogSection = () => {
  return (
    <div className='dialogs'>
      <section className='dialogs__header'>
        <div className='active-user'>
          <img src={userLogo} alt='active user icon' />
          <span>Active User - Diana</span>
        </div>
      </section>
      <section className='dialogs__dialogs'>
        <div>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
        </div>
      </section>
      <section className='dialogs__input-section'>
        <input placeholder='write a message' />
      </section>
    </div>
  );
};
