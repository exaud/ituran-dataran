import NavBar from '../navbar';
import Sidebar from '../sidebar';
import ChatBotIcon from './icons/ChatBotIcon';
import './style.css'

function PageContainer({ children }) {
    return (
        <div className='page-container'>
            <Sidebar />
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