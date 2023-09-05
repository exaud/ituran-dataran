import './App.css';
import Navbar from './components/navbar'
import Sidebar from './components/SideBar'
import "@fontsource/nunito-sans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-container'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
