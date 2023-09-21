import './App.css';
import Navbar from './components/navbar'
import Home from './components/pages/home'
import { useCallback, useState, forwardRef } from 'react'
import Dashboards from './components/pages/dashboards';
import Reports from './components/pages/reports'
import Settings from './components/pages/settings'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "@fontsource/nunito-sans";
import HeroSection from './components/LoginPage/HeroSection';
import BigDataLogin from './components/LoginPage/BigDataLogin';


function App() {
  const value = JSON.parse(window.sessionStorage.getItem('isSubmitted')) === true ;

  function LoginPage(){
    return (
        <div class="loginpage-container">
            <HeroSection></HeroSection>
            <BigDataLogin></BigDataLogin>
        </div> 
    );
  };

  if (!value){
      return (LoginPage());
   }
    else {
      return(
        <div className="MainPage">
        <Navbar />
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
    }
}

export default App;
