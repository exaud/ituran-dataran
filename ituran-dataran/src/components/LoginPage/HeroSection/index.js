
import { useCallback, useState, forwardRef } from 'react'
import ImageContainer from '../ImageContainer'
import Logo from '../../Logos/Logo';
import './style.css'

function HeroSection() {
  return (
    <div className={`loginpage-dataran-left-container`}>
        <div className={`loginpage-dataran-heading-container`}>
          <div className={`loginpage-dataran-logo-container`}>
            <Logo className='loginpage-logo' />
          </div>
          <p className={`loginpage-dataran-heading`}>Dataran</p>
        </div>
      <ImageContainer />
    </div>
  );
}
export default HeroSection