import React from 'react';
import { useState } from 'react'
import NavBar from '../navbar';
import SideBar from '../sidebar';
import ChatBotIcon from './icons/ChatBotIcon';
import './style.css'

function PageContainer(children : any) {

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
                    {children}
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