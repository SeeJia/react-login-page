import React,{useState} from 'react';
import Login from './pages/login/login';
import Home from './pages/home/home';
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setloginData] = useState(null);

  const handleLogin = (loginData) => {
    setLoggedIn(true);
    setloginData(loginData);
  };

  return (
     <div> 

     {loggedIn ? (
        <Home loginData={loginData} />
      ) : (
        <Login setLogin={handleLogin} />
      )}
    
    </div> 
  );
}

export default App;
