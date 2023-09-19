import { useCallback, useState, forwardRef } from 'react'
import { Button } from '@mui/base'
import UserInput from '../UserInput'
import PasswordInput from '../PasswordInput'
import './style.css'

function BigDataLogin(onClick) {
  const [errorMessages, setErrorMessages] = useState({});
  //Read value from local
  const value = JSON.parse(window.localStorage.getItem('isSubmitted')) === true ;
  const [isSubmitted, setIsSubmitted]= useState(value);

  const uname = window.localStorage.getItem('userValue')
  const [userValue, setUserValue] = useState({uname});
  const pass = window.localStorage.getItem('passValue')
  const [passValue, setPassValue] = useState({pass});

  const database = [
    {
      username: "test1",
      password: "test1",
    }
  ];
  const errors = {
    error: "invalid username/password"
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  function handleClick(){
    // Find user login info
    const userData = database.find((user) => user.username === uname);
    // Compare user info
    if (userData) {
      if (userData.password !== pass) {
        // Invalid password
        setErrorMessages({ name: "error", message: errors.error });
      } else {
        setIsSubmitted(true);
        window.localStorage.setItem('isSubmitted', 'true');
        window.location.reload();
      }
    } else {
      // Username not found
      setErrorMessages({ name: "error", message: errors.error });
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
        <Button className="loginpage-login-button" onClick={handleClick} >Login</Button>
        {renderErrorMessage("error")}
      </div>
    </div>
  );

  return (
      LoginForm
  );

}
export default BigDataLogin