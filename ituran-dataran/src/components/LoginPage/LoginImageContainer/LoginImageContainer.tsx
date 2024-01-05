/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import BigImageLogin from './bigImageLogin.png';
import './LoginImageContainer.css'


const LoginImageContainer = () : JSX.Element => ( 
    <div className={`loginpage-big-image-card`}>
      <img src={BigImageLogin} loading='lazy' alt='login image'/>
    </div>
);

export default LoginImageContainer