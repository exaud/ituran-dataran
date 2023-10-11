import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/base'
import UserInput from '../UserInput'
import PasswordInput from '../PasswordInput'
import './style.css'


function BigDataLogin() : JSX.Element {
  const database = [
    {
      username: "test1",
      password: "test1",
    }
  ];
 
  const [loginError, setLoginError] = useState('false');
  const errors = {
    message: "invalid username/password"
  };

  function renderErrorMessage() {
    let error : boolean = loginError === "true";
    if (error) {
      return ( <div className="error">{errors.message}</div>);
    }
    else {
      return (<div className="error"></div>);
    }
  }
           
  function handleClick(){
    const uname = window.sessionStorage.getItem('userValue')
    const pass = window.sessionStorage.getItem('passValue')

    // Find user login info
    const userData = database.find((user) => user.username === uname);
    // Compare user info
    if (userData) {
      if (userData.password !== pass) {
        // Invalid password
        setLoginError("true");
      } else {
        window.sessionStorage.setItem('isSubmitted', 'true');
        window.sessionStorage.removeItem('userValue');
        window.sessionStorage.removeItem('passValue');
        window.location.reload();
      }
    } else {
      // Username not found
      setLoginError("true");
    }
}
  
  const LoginForm = (
    <div className={`loginpage-login-right-container`}>
      <p className={`loginpage-login-heading`}>
        <span className={`loginpage-login-title-blue`}>Login</span> 
        <span className={`loginpage-login-title-black`}> to your big data account</span>
      </p>
      <div className={`loginpage-login-form-container`}>
        <UserInput />
        <PasswordInput />
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="loginpage-login-button" onClick={handleClick}>Login</Button>
        {renderErrorMessage()}
      </div>
    </div>
  );

  return (
      LoginForm
  );

}
export default BigDataLogin