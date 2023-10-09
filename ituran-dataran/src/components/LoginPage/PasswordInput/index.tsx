import React from 'react';
import { useState } from 'react'
import './style.css'

function PasswordInput() {

  const [passValue, setPassValue] = useState({});

  const updatePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(event.target.value);
    window.sessionStorage.setItem('passValue', event.target.value);
    //console.log('value is:', event.target.value);
  };

  return (
    <div className={`loginpage-pass-input-card`}>
      <div className={`loginpage-pass-input-field`}>
        <img className={`loginpage-pass-icon-container loginpage-pass-img-content-icon`} />
        <input className={`loginpage-pass-input-text`} type="password" name="pass" onChange={updatePass} required></input>
      </div>
    </div>
  );
}
export default PasswordInput