import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import pages from './pages';

const { LandingPage, Home, Profile } = pages;

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(JSON.parse(authStatus));
    }
  }, []);

  const handleAuth = (status, message) => {
    alert(message);
    if (status) {
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('isAuthenticated');
      setIsAuthenticated(false);
    }
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/home"
            element={isAuthenticated ? <Home handleAuth={handleAuth} /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={<LandingPage handleAuth={handleAuth} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;