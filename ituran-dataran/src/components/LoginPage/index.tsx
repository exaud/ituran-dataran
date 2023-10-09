import React from 'react'
import HeroSection from './HeroSection';
import BigDataLogin from './BigDataLogin';
import './style.css'

function LoginPage(){
    return (
        <div>
            <HeroSection></HeroSection>
            <BigDataLogin></BigDataLogin>
        </div> 
    );
  };

export default LoginPage