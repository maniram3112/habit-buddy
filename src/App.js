import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import pages from './pages';

const { LandingPage, Home, Profile } = pages;

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(JSON.parse(authStatus));
    }
    const storedHabits = JSON.parse(localStorage.getItem('habits'));
    setHabits(storedHabits);
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

  const updateHabits = (updatedHabits) =>{
    setHabits(updatedHabits);
    localStorage.setItem('habits', JSON.stringify(updatedHabits));
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/home"
            element={isAuthenticated ? <Home handleAuth={handleAuth} habits={habits} setHabits={updateHabits}/> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile habits={habits}/> : <Navigate to="/" />}
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