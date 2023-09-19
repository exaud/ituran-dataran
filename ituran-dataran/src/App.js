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
  const value = JSON.parse(window.localStorage.getItem('isSubmitted')) === true ;
  const [isSubmitted, setIsSubmitted]= useState(value);

  function handleClick(){
      setIsSubmitted(true);
      window.localStorage.setItem('isSubmitted', 'true');
      window.location.reload();
  }

  function LoginPage(handleClick){
    return (
        <div class="loginpage-container">
            <HeroSection></HeroSection>
            <BigDataLogin onClick={handleClick}></BigDataLogin>
        </div> 
    );
  };

  if (!isSubmitted){
      return (LoginPage(handleClick));
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
