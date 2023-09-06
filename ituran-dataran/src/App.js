import './App.css';
import Navbar from './components/navbar'
import Home from './components/pages/home'
import Dashboard from './components/pages/dashboards'
import Reports from './components/pages/reports'
import Settings from './components/pages/settings'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "@fontsource/nunito-sans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboards/:data' element={<Dashboard />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
