import React from 'react';
import { useState } from 'react'
import './PasswordInput.css'
import PasswordLoginIcon from '../../../icons/passwordLoginIcon.png'

function PasswordInput() : JSX.Element {

  const [passValue, setPassValue] = useState({});

  const updatePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(event.target.value);
    window.sessionStorage.setItem('passValue', event.target.value);
  };

  return (
    <div className={`loginpage-pass-input-card`}>
      <div className={`loginpage-pass-input-field`}>
        <img src={PasswordLoginIcon} className={`loginpage-pass-icon`} loading='lazy' alt='password login icon'/>
        <input className={`loginpage-pass-input-text`} type="password" name="pass" onChange={updatePass} required></input>
      </div>
    </div>
  );
}
export default PasswordInput