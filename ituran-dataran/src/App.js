import './App.css';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import "@fontsource/nunito-sans";


function App() {
  const value = JSON.parse(window.sessionStorage.getItem('isSubmitted')) === true ;

  if (!value){
    <div className="LoginPage">
      <LoginPage/>
    </div> 
   }
  else {
      return(
        <div className="MainPage">
          <MainPage></MainPage>
        </div>
      );
  }
}

export default App;
