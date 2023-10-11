import React from 'react'
import HeroSection from './HeroSection';
import BigDataLogin from './BigDataLogin';
import './style.css'

function LoginPage() : JSX.Element {
    return (
        <div className='loginpage-container'>
            <HeroSection></HeroSection>
            <BigDataLogin></BigDataLogin>
        </div> 
    );
  };

export default LoginPage