import { useEffect, useState } from 'react'
import NavBar from '../navbar';
import Sidebar from '../sidebar';
import ChatBotIcon from './icons/ChatBotIcon';
import './style.css'

function PageContainer({ children }) {

    const [hoveringSidebar, setHoveringSidebar] = useState(false);

    function toggleSidebar(state) {
        setHoveringSidebar(state);
    }
    return (
        <div className='page-container'>
            <Sidebar hoveringSidebar={hoveringSidebar} onMouseOver={toggleSidebar}/>
            <div className='content-container'>
                <NavBar />
                <div className='info-container'>
                    {children}
                </div>

                <div className='chat-bot'>
                    <div className='chat-bot-container'>
                        <ChatBotIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageContainer