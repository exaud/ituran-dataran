/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './style.css'
import BigImageLogin from './bigImageLogin.png';


const ImageContainer = () : JSX.Element => ( 
    <div className={`loginpage-big-image-card`}>
      <img src={BigImageLogin} loading='lazy' alt='login image'/>
    </div>
);

export default ImageContainer