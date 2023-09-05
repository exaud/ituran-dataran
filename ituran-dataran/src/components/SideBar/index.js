import { useState } from 'react'
import HomeIcon from './icons/HomeIcon'
import DashboardsIcon from './icons/DashboardsIcon'
import ReportsIcon from './icons/ReportsIcon'
import SettingsIcon from './icons/SettingsIcon'
import './style.css'

function SideBar({ }) {
    const [buttonSelected, setButtonSelected] = useState(0);
    const [hoveringSidebar, setHoveringSidebar] = useState(false);

    function toggleSideBar(state) {
        setHoveringSidebar(state);
    }

    return (
        <div className='sidebar-wrapper'>
            <div className='sidebar'>
                <div className='sidebar-column' onMouseOver={() => toggleSideBar(true)} onMouseOut={() => toggleSideBar(false)}>
                    <div className='sidebar-container'>
                        <button className='sidebar-button' onClick={() => setButtonSelected(0)}>
                            <div className={`sidebar-button-icon ${buttonSelected === 0 ? " current" : ""}`}>
                                <HomeIcon className='svg-container' />
                            </div>
                            <div className={`sidebar-button-title ${buttonSelected === 0 ? " current" : ""}`}>
                                <p>Home</p>
                            </div>
                        </button>
                        <button className='sidebar-button' onClick={() => setButtonSelected(1)}>
                            <div className={`sidebar-button-icon ${buttonSelected === 1 ? " current" : ""}`}>
                                <DashboardsIcon className='svg-container' />
                            </div>
                            <div className={`sidebar-button-title ${buttonSelected === 1 ? " current" : ""}`}>
                                <p>Dashboards</p>
                            </div>
                        </button>
                        {buttonSelected === 1 && hoveringSidebar ?
                            <div className='sibebar-section-sub-options'>
                                <button>
                                    <p>Main Dashboard</p>
                                </button>
                                <button>
                                    <p>Vehicle Geo Insights</p>
                                </button>
                                <button>
                                    <p>Daily Insights</p>
                                </button>
                                <button>
                                    <p>Vehicle Insights</p>
                                </button>
                                <button>
                                    <p>Safety Events</p>
                                </button>
                            </div>
                            : null}
                        <button className='sidebar-button' onClick={() => setButtonSelected(2)}>
                            <div className={`sidebar-button-icon ${buttonSelected === 2 ? " current" : ""}`}>
                                <ReportsIcon className='svg-container' />
                            </div>
                            <div className={`sidebar-button-title ${buttonSelected === 2 ? " current" : ""}`}>
                                <p>Reports</p>
                            </div>
                        </button>
                        <button className='sidebar-button' onClick={() => setButtonSelected(3)}>
                            <div className={`sidebar-button-icon ${buttonSelected === 3 ? " current" : ""}`}>
                                <SettingsIcon className='svg-container' />
                            </div>
                            <div className={`sidebar-button-title ${buttonSelected === 3 ? " current" : ""}`}>
                                <p>Settings</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideBar