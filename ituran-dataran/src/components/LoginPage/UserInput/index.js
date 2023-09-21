import { useCallback, useState, forwardRef } from 'react'
import './style.css'

function UserInput() {
  const [userValue, setUserValue] = useState({});

  function getUser() {
    return this.input.value;
  }

  const updateUser = event => {
    setUserValue(event.target.value);
    window.sessionStorage.setItem('userValue', event.target.value);
    //console.log('value is:', event.target.value);
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