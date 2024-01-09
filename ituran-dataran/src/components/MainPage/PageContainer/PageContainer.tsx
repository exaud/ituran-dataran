import React from 'react';
import { useState } from 'react'
import ChatBotIcon from '../../icons/ChatBotIcon';
import './PageContainer.css'
import { Outlet } from 'react-router';
import SideBar from '../Sidebar/SideBar';
import NavBar from '../Navbar/NavBar';


function PageContainer() : JSX.Element {

    const [hoveringSidebar, setHoveringSidebar] = useState(false);

    function toggleSidebar( state : boolean) {
        setHoveringSidebar(state);
    }
    return (
        <div className='page-container'>
            <SideBar hoveringSidebar={hoveringSidebar} onMouseOver={toggleSidebar}/>
            <div className='content-container'>
                <NavBar hoveringSidebar={hoveringSidebar}/>
                <div className='info-container'>
                    <Outlet />
                </div>

                <div className='chat-bot'>
                    <div className='chat-bot-container'>
                        <ChatBotIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageContainer