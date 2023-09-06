import { useEffect, useState } from 'react'
import HomeIcon from './icons/HomeIcon'
import DashboardsIcon from './icons/DashboardsIcon'
import ReportsIcon from './icons/ReportsIcon'
import SettingsIcon from './icons/SettingsIcon'
import { Link, useParams, useLocation } from 'react-router-dom'
import './style.css'

function Sidebar({ }) {
    const location = useLocation();
    const [buttonSelected, setButtonSelected] = useState(0);
    const [subButtonSelected, setSubButtonSelected] = useState(0);
    const [hoveringSidebar, setHoveringSidebar] = useState(false);

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
                    case 'vehicle-geo-insights':
                        return setSubButtonSelected(1)
                    case 'daily-insights':
                        return setSubButtonSelected(2)
                    case 'vehicle-insights':
                        return setSubButtonSelected(3)
                    case 'safety-events':
                        return setSubButtonSelected(4)
                }
                return
            case 'reports':
                return setButtonSelected(2)
            case 'settings':
                return setButtonSelected(3)
        }
    });

    function toggleSidebar(state) {
        setHoveringSidebar(state);
    }

    return (
        <div className='sidebar-wrapper'>
            <div className='sidebar'>
                <div className='sidebar-column' onMouseOver={() => toggleSidebar(true)} onMouseOut={() => toggleSidebar(false)}>
                    <div className='sidebar-container'>
                        <button className='sidebar-button' onClick={() => setButtonSelected(0)}>
                            <div className={`sidebar-button-icon ${buttonSelected === 0 ? " current" : ""}`}>
                                <HomeIcon className='svg-container' />
                            </div>
                            <div className={`sidebar-button-title ${buttonSelected === 0 ? " current" : ""}`}>
                                <Link onClick={() => window.location.href = "/"}>Home</Link>
                            </div>
                        </button>
                        <button className='sidebar-button' onClick={() => setButtonSelected(1)}>
                            <div className={`sidebar-button-icon ${buttonSelected === 1 ? " current" : ""}`}>
                                <DashboardsIcon className='svg-container' />
                            </div>
                            <div className={`sidebar-button-title ${buttonSelected === 1 ? " current" : ""}`}>
                                <Link onClick={() => window.location.href = "/dashboards/main-dashboard"}>Dashboards</Link>
                            </div>
                        </button>
                        {buttonSelected === 1 && hoveringSidebar ?
                            <div className='sibebar-section-sub-options'>
                                <button className={`sidebar-sub-button ${subButtonSelected === 0 ? " current-sub-option" : ""}`}>
                                    <Link onClick={() => window.location.href = "/dashboards/main-dashboard"}>Main Dashboard</Link>
                                </button>
                                <button className={`sidebar-sub-button ${subButtonSelected === 1 ? " current-sub-option" : ""}`}>
                                    <Link onClick={() => window.location.href = "/dashboards/vehicle-geo-insights"}>Vehicle Geo Insights</Link>
                                </button>
                                <button className={`sidebar-sub-button ${subButtonSelected === 2 ? " current-sub-option" : ""}`}>
                                    <Link onClick={() => window.location.href = "/dashboards/daily-insights"}>Daily Insights</Link>
                                </button>
                                <button className={`sidebar-sub-button ${subButtonSelected === 3 ? " current-sub-option" : ""}`}>
                                    <Link onClick={() => window.location.href = "/dashboards/vehicle-insights"}>Vehicle Insights</Link>
                                </button>
                                <button className={`sidebar-sub-button ${subButtonSelected === 4 ? " current-sub-option" : ""}`}>
                                    <Link onClick={() => window.location.href = "/dashboards/safety-events"}>Safety Events</Link>
                                </button>
                            </div>
                            : null}
                        <button className='sidebar-button' onClick={() => setButtonSelected(2)}>
                            <div className={`sidebar-button-icon ${buttonSelected === 2 ? " current" : ""}`}>
                                <ReportsIcon className='svg-container' />
                            </div>
                            <div className={`sidebar-button-title ${buttonSelected === 2 ? " current" : ""}`}>
                                <Link onClick={() => window.location.href = "/reports"}>Reports</Link>
                            </div>
                        </button>
                        <button className='sidebar-button' onClick={() => setButtonSelected(3)}>
                            <div className={`sidebar-button-icon ${buttonSelected === 3 ? " current" : ""}`}>
                                <SettingsIcon className='svg-container' />
                            </div>
                            <div className={`sidebar-button-title ${buttonSelected === 3 ? " current" : ""}`}>
                                <Link onClick={() => window.location.href = "/settings"}>Settings</Link>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar