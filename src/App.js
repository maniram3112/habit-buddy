import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import pages from './pages';

const {LandingPage, Home} = pages;

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if(authStatus){
      setIsAuthenticated(JSON.parse(authStatus));
    }
  }, []);

  const handleAuth = (status, message) =>{
    alert(message);
    if(status){
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      setIsAuthenticated(true);
    }
  }

  return (
    <Router>
      <div className="App">
        {/* <LandingPage/>
        <Home/> */}
        <Routes>
          <Route
            path = "/home"
            element = {isAuthenticated ? <Home/> : <Navigate t="/" />}
          />
          <Route
            path='/'
            element = {<LandingPage handleAuth={handleAuth} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
