import Sidebar from '../Sidebar';
import './style.css'

function PageContainer({ children }) {
    return (
        <div className='page-container'>
            <Sidebar />
            <div className='content-container'>
                {children}
            </div>
        </div>
    );
}
export default PageContainer