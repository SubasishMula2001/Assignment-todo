import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import ProfileIcon from './components/ProfileIcon/ProfileIcon';
import TaskList from './components/TaskList/TaskList';
import Weather from './components/Weather/Weather';
import Calculator from './components/Calculator/Calculator';
import Login from './components/Login/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
              <Link to="/" className="button task-board-button">Task Board</Link>
              <Link to="/login" className="button weather-button">Login</Link>
              <Link to="/signup" className="button task-board-button">Sign Up</Link>
               <Link to="/weather" className="button weather-button">Weather</Link>
               <Link to="/calculator" className="button calculator-button">Calculator</Link>
               
          </ul>
        </nav>

        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={isLoggedIn ? <Authenticated /> : <Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

function Authenticated() {
  return (
    <div>
      <ProfileIcon />
      <TaskList />
    </div>
  );
}

export default App;
