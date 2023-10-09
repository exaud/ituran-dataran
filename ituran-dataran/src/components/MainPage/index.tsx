import React from 'react'
import Home from './pages/home';
import Dashboards from './pages/dashboards';
import Reports from './pages/reports';
import Settings from './pages/settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "@fontsource/nunito-sans";


function MainPage(){
    return (
        <div>
            <Router basename="/ituran-dataran">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboards/:data' element={<Dashboards />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
            </Router> 
        </div>
    );
  };

export default MainPage

