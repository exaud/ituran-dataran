import React from 'react';
import './style.css'


function UserInput() : JSX.Element {

  const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.sessionStorage.setItem('userValue', event.target.value);
  };

  return (
    <div className={`loginpage-user-input-card`}>
      <div className={`loginpage-user-input-container`}>
        <img className={`loginpage-user-icon-container loginpage-user-img-content-icon`} />
        <input className={`loginpage-user-input-text`} type="text" name="uname" onChange={updateUser} required></input>
      </div>
    </div>
  );
}
export default UserInput