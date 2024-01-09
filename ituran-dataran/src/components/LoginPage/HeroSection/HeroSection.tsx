import React from 'react';
import LoginImageContainer from '../LoginImageContainer/LoginImageContainer'
import Logo from '../../icons/Logo/Logo'
import './HeroSection.css'

function HeroSection() : JSX.Element {
  return (
    <div className={`loginpage-dataran-left-container`}>
        <div className={`loginpage-dataran-heading-container`}>
          <div className={`loginpage-dataran-logo-container`}>
            <Logo className="loginpage-logo"  />
          </div>
          <p className={`loginpage-dataran-heading`}>Dataran</p>
        </div>
      <LoginImageContainer />
    </div>
  );
}
export default HeroSection