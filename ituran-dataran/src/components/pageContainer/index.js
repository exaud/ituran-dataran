import Sidebar from '../sidebar';
import ChatBotIcon from './icons/ChatBotIcon';
import './style.css'

function PageContainer({ children }) {
    return (
        <div className='page-container'>
            <Sidebar />
            <div className='content-container'>
                {children}
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