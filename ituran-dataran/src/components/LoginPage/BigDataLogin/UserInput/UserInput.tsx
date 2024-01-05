import React from 'react';
import { useState } from 'react'
import './UserInput.css'
import UserLoginIcon from '../../../icons/userLoginIcon.png'


function UserInput() : JSX.Element {
  const [userValue, setUserValue] = useState({});

  const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(event.target.value);
    window.sessionStorage.setItem('userValue', event.target.value);
  };

  return (
    <div className={`loginpage-user-input-card`}>
      <div className={`loginpage-user-input-container`}>
        <img src={UserLoginIcon} className={`loginpage-user-icon`} loading='lazy' alt='user login icon'/>
        <input className={`loginpage-user-input-text`} type="text" name="uname" onChange={updateUser} required></input>
      </div>
    </div>
  );
}
export default UserInput