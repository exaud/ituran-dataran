import React from 'react';
import './style.css'

function PasswordInput() : JSX.Element {

  const updatePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.sessionStorage.setItem('passValue', event.target.value);
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