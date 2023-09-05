import './App.css';
import Navbar from './components/navbar'
import Sidebar from './components/SideBar'
import Dashboard from './components/Pages/DashBoard'
import "@fontsource/nunito-sans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-container'>
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
