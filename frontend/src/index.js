import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/Navbar.css';
import HomePage from './components/HomePage';
import reportWebVitals from './reportWebVitals';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import Courses from './components/coursedatabase/Courses';
import U8sSession from './components/sessionplans/u8sSession';
import FiveASide from './components/formations/5-a-side';
import About from './components/About';


function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          Coaches Corner
          <ul>
            <li>
              <div>Formations</div>
              <ul className="formations-submenu">
                <li>
                  <Link to="coaches-corner/formations/5-a-side">5-a-side</Link>
                  <Link to="coaches-corner/formations/7-a-side">7-a-side</Link>
                  <Link to="coaches-corner/formations/9-a-side">9-a-side</Link>
                </li>
              </ul>
            </li>
            <li>
              <div>Session Plans</div>
              <ul className="session-plans-submenu">
                <li>
                  <div>u8s-u9s</div>
                  <ul className="session-plans-sub-submenu">
                    <li>
                      <Link to="/coaches-corner/session-plans/u8sSession">Dribbling Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u8sSession">Shooting Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u8sSession">Passing Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u8sSession">Defending Session</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}


function App () {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="courses" element={<Courses />} />
          <Route path="coaches-corner/formations/5-a-side" element={<FiveASide />} />
          <Route path="coaches-corner/session-plans/u8sSession" element={<U8sSession />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
