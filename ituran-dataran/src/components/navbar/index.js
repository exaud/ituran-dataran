import { useEffect, useState } from 'react'
import { Input } from '@mui/base'
import Logo from './icons/Logo'
import NotificationsIcon from './icons/NotificationsIcon'
import UKFlagIcon from './icons/UKFlagIcon'
import LanguageDropdownIcon from './icons/LanguageDropdownIcon'
import './style.css'

function NavBar() {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long' };
    const currentDayOfWeek = date.toLocaleString('en-US', options);
    setCurrentDayOfWeek(currentDayOfWeek);
    const currentDay = date.getDate();
    setCurrentDay(currentDay)
    const currentMonth = date.getMonth() + 1;
    setCurrentMonth(currentMonth)
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <Logo className='logo' />
          <div className={`dataran-container`}>
            <p className={`dataran-heading`}>Dataran</p>
          </div>
        </div>
        <div className='navbar-main-container'>
          <p className='navbar-date'>{currentDayOfWeek} {currentDay}/{currentMonth}</p>
          <div className='navbar-search'>
            {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <Input
              slotProps={{ root: { className: "input-container" }, input: { className: "input-field input-style::placeholder", placeholder: "Search", type: "text" } }}
              endAdornment={
                <>
                  <div data-internal-layout-id="876:18956" className="hierarchical-container">
                    <svg viewBox="0 0 20 20" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SearchOutline" xmlns="http://www.w3.org/2000/svg">
                        <path
                          id="Vector_5"
                          d="M17.5,17.5l-5,-5M14.17,8.3333c0,0.7661 -0.15,1.5246 -0.45,2.2324c-0.29,0.7077 -0.72,1.3507 -1.26,1.8924c-0.54,0.5417 -1.18,0.9714 -1.89,1.2645c-0.71,0.2932 -1.47,0.4441 -2.23,0.4441c-0.77,0 -1.53,-0.1509 -2.24,-0.4441c-0.7,-0.2931 -1.35,-0.7228 -1.89,-1.2645c-0.54,-0.5417 -0.97,-1.1847 -1.26,-1.8924c-0.3,-0.7078 -0.45,-1.4663 -0.45,-2.2324c0,-1.5471 0.62,-3.0308 1.71,-4.1248c1.09,-1.0939 2.58,-1.7085 4.13,-1.7085c1.54,0 3.03,0.6146 4.12,1.7085c1.09,1.094 1.71,2.5777 1.71,4.1248z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                </>
              }
            />
          </div>
          <div className='navbar-avatar'>
            <div className='navbar-notifications'>
              <div className='navbar-notifications-svg-container'>
                <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
                  <g id="heroicons-outline/bell" xmlns="http://www.w3.org/2000/svg">
                    <path
                      id="Vector_6"
                      d="M19.05,21.41995c2.02,-0.2397 3.97,-0.7148 5.81,-1.3971c-1.53,-1.701 -2.46,-3.9529 -2.46,-6.4226v-0.7475c0,-0.0175 0,-0.035 0,-0.0525c0,-3.5342 -2.87,-6.3993 -6.4,-6.3993c-3.53,0 -6.4,2.8651 -6.4,6.3993v0.8c0,2.4697 -0.93,4.7216 -2.46,6.4226c1.84,0.6824 3.79,1.1574 5.81,1.3971M19.05,21.41995c-1,0.1185 -2.02,0.1795 -3.05,0.1795c-1.03,0 -2.05,-0.061 -3.05,-0.1795M19.05,21.41995c0.1,0.3086 0.15,0.6378 0.15,0.9794c0,1.7671 -1.43,3.1997 -3.2,3.1997c-1.77,0 -3.2,-1.4326 -3.2,-3.1997c0,-0.3416 0.05,-0.6707 0.15,-0.9794"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.59984"
                    />
                  </g>
                </svg>
              </div>
              <span className='navbar-notifications-red-dot' />
            </div>
            <div className='navbar-profile'>
              <div className='navbar-profile-picture-container'>
                <img height={'32px'} width={'32px'} src={process.env.PUBLIC_URL + '/profile_picture.png'} alt='cannot display' />
              </div>
              <NotificationsIcon className='navbar-profile-options-button' />
            </div>
          </div>
          <div className='navbar-language-selector'>
            <UKFlagIcon className='navbar-language-flag' />
            <p>EN</p>
            <LanguageDropdownIcon className='navbar-language-dropdown-button' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar