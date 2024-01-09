import React from 'react'
import HeroSection from './HeroSection/HeroSection';
import BigDataLogin from './BigDataLogin/BigDataLogin';
import './LoginPage.css'

function LoginPage() : JSX.Element {
    return (
        <div className='loginpage-container'>
            <HeroSection></HeroSection>
            <BigDataLogin></BigDataLogin>
        </div> 
    );
  };

export default LoginPage