import React from 'react'
import { useEffect, useState } from 'react'
// @ts-ignore
import HomeIcon from './icons/HomeIcon'
import LogoSmall from './icons/LogoSmall'
import DashboardsIcon from './icons/DashboardsIcon'
import ReportsIcon from './icons/ReportsIcon'
import SettingsIcon from './icons/SettingsIcon'
import { Link, useLocation } from 'react-router-dom'
import './style.css'

type Props = {
    hoveringSidebar : any,
    onMouseOver : any,
  }

function SideBar( props : Props ) : JSX.Element {
    const location = useLocation();
    const [buttonSelected, setButtonSelected] = useState(0);
    const [subButtonSelected, setSubButtonSelected] = useState(0);

    useEffect(() => {
        const path = location.pathname.split('/')

        switch (path[1]) {
            case '':
                return setButtonSelected(0)
            case 'dashboards':
                setButtonSelected(1)
                switch (path[2]) {
                    case 'main-dashboard':
                        return setSubButtonSelected(0)
                    case 'macro-dashboard':
                            return setSubButtonSelected(1)
                    case 'vehicle-geo':
                        return setSubButtonSelected(2)
                    case 'macro-geo':
                        return setSubButtonSelected(3)
                    case 'safety-events':
                        return setSubButtonSelected(4)
                    case 'macro-safety':
                        return setSubButtonSelected(5)
/*                     case 'daily-insights':
                            return setSubButtonSelected(6)
                    case 'vehicle-insights':
                            return setSubButtonSelected(7) */
                    default:
                }
                return
            case 'reports':
                return setButtonSelected(2)
            case 'settings':
                return setButtonSelected(3)
            default:
        }
    });

    return (
        <div className='sidebar'>
            <div className='sidebar-column' onMouseOver={() => props.onMouseOver(true)} onMouseOut={() => props.onMouseOver(false)}>
                <div className='sidebar-container'>
                    <button className='sidebar-home-button'>
                        <Link to="/" >
                            <div className='sidebar-home-button-container'>
                                <div className={`sidebar-homne-button-icon`}>
                                    { props.hoveringSidebar ? 
                                        <HomeIcon className='sidebar-logo-container'/>
                                        :
                                        <LogoSmall/>
                                    }
                                </div>
                            </div>
                        </Link>
                    </button>
                    <button className='sidebar-button'>
                        <Link to="/dashboards/main-dashboard">
                            <div className='sidebar-button-container'>
                                <div className={`sidebar-button-icon ${buttonSelected === 1 ? " current" : ""}`}>
                                    <DashboardsIcon className='svg-container' />
                                </div>
                                <div className={`${buttonSelected === 1 ? " current" : ""} sidebar-button-title`}>
                                    <p>Dashboards</p>
                                </div>
                            </div>
                        </Link>
                    </button>
                    {buttonSelected === 1 && props.hoveringSidebar ?
                        <div className='sibebar-section-sub-options'>
                            <button className={`sidebar-sub-button ${subButtonSelected === 0 ? " current-sub-option" : ""}`}>
                                <Link to="/dashboards/main-dashboard">Main Dashboard</Link>
                            </button>
                            <button className={`sidebar-sub-button ${subButtonSelected === 1 ? " current-sub-option" : ""}`}>
                                <Link to="/dashboards/macro-dashboard">Macro Dashboard</Link>
                            </button>
                            <button className={`sidebar-sub-button ${subButtonSelected === 2 ? " current-sub-option" : ""}`}>
                                <Link to="/dashboards/vehicle-geo">Vehicle Geo</Link>
                            </button>
                            <button className={`sidebar-sub-button ${subButtonSelected === 3 ? " current-sub-option" : ""}`}>
                                <Link to="/dashboards/macro-geo">Macro Geo</Link>
                            </button>
                            <button className={`sidebar-sub-button ${subButtonSelected === 4 ? " current-sub-option" : ""}`}>
                                <Link to="/dashboards/safety-events">Safety Events</Link>
                            </button>
                            <button className={`sidebar-sub-button ${subButtonSelected === 5 ? " current-sub-option" : ""}`}>
                                <Link to="/dashboards/macro-safety">Macro Safety</Link>
                            </button>
{/*                             <button className={`sidebar-sub-button ${subButtonSelected === 6 ? " current-sub-option" : ""}`}>
                                <Link to="/dashboards/daily-insights">Daily Insights</Link>
                            </button>
                            <button className={`sidebar-sub-button ${subButtonSelected === 7 ? " current-sub-option" : ""}`}>
                                <Link to="/dashboards/vehicle-insights">Vehicle Insights</Link>
                            </button> */}
                        </div>
                        : null}
                    <button className='sidebar-button'>
                        <Link to="/reports">
                            <div className='sidebar-button-container'>

                                <div className={`sidebar-button-icon ${buttonSelected === 2 ? " current" : ""}`}>
                                    <ReportsIcon className='svg-container' />
                                </div>
                                <div className={`sidebar-button-title ${buttonSelected === 2 ? " current" : ""}`}>
                                    <p>Reports</p>
                                </div>
                            </div>
                        </Link>
                    </button>
                    <button className='sidebar-button'>
                        <Link to="/settings">
                            <div className='sidebar-button-container'>

                                <div className={`sidebar-button-icon ${buttonSelected === 3 ? " current" : ""}`}>
                                    <SettingsIcon className='svg-container' />
                                </div>
                                <div className={`sidebar-button-title ${buttonSelected === 3 ? " current" : ""}`}>
                                    <p>Settings</p>
                                </div>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </div >
    );
}
export default SideBar