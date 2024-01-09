import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import "@fontsource/nunito-sans";


function App() {
  const value = JSON.parse(window.sessionStorage.getItem('isSubmitted')) === true ;

  if (!value){
    return(
      <div className="LoginPage">
        <LoginPage/>
      </div>
    );
   }
  else {
       return(
        <div className="MainPage">
          <MainPage/>
        </div> 
      );
  }
}

export default App;
