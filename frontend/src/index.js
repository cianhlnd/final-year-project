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
import U8sDribblingSession from './components/sessionplans/u8s-u9s/u8sDribblingSession';
import U8sDefendingSession from './components/sessionplans/u8s-u9s/u8sDefendingSession';
import U8sPassingSession from './components/sessionplans/u8s-u9s/u8sPassingSession';
import U8sShootingSession from './components/sessionplans/u8s-u9s/u8sShootingSession';
import U10sDribblingSession from './components/sessionplans/u10s-u11s/u10sDribblingSession';
import U10sDefendingSession from './components/sessionplans/u10s-u11s/u10sDefendingSession';
import U10sPassingSession from './components/sessionplans/u10s-u11s/u10sPassingSession';
import U10sShootingSession from './components/sessionplans/u10s-u11s/u10sShootingSession';
import U12sDribblingSession from './components/sessionplans/u12s/u12sDefendingSession';
import U12sDefendingSession from './components/sessionplans/u12s/u12sDefendingSession';
import U12sPassingSession from './components/sessionplans/u12s/u12sPassingSession';
import U12sShootingSession from './components/sessionplans/u12s/u12sShootingSession';
import FiveASide from './components/formations/5-a-side';
import SevenASide from './components/formations/7-a-side';
import NineASide from './components/formations/9-a-side';
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
                      <Link to="/coaches-corner/session-plans/u8s/dribbling">Dribbling Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u8s/defending">Defending Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u8s/shooting">Shooting Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u8s/passing">Passing Session</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>u10s-u11s</div>
                  <ul className="session-plans-sub-submenu">
                    <li>
                      <Link to="/coaches-corner/session-plans/u10s/dribbling">Dribbling Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u10s/defending">Defending Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u10s/shooting">Shooting Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u10s/passing">Passing Session</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>u12s</div>
                  <ul className="session-plans-sub-submenu">
                    <li>
                      <Link to="/coaches-corner/session-plans/u12s/dribbling">Dribbling Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u12s/defending">Defending Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u12s/shooting">Shooting Session</Link>
                    </li>
                    <li>
                      <Link to="/coaches-corner/session-plans/u12s/passing">Passing Session</Link>
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
          <Route path="coaches-corner/formations/7-a-side" element={<SevenASide />} />
          <Route path="coaches-corner/formations/9-a-side" element={<NineASide />} />
          <Route path="coaches-corner/session-plans/u8s/dribbling" element={<U8sDribblingSession />} />
          <Route path="coaches-corner/session-plans/u8s/defending" element={<U8sDefendingSession />} />
          <Route path="coaches-corner/session-plans/u8s/shooting" element={<U8sShootingSession />} />
          <Route path="coaches-corner/session-plans/u8s/passing" element={<U8sPassingSession />} />
          <Route path="coaches-corner/session-plans/u10s/dribbling" element={<U10sDribblingSession />} />
          <Route path="coaches-corner/session-plans/u10s/defending" element={<U10sDefendingSession />} />
          <Route path="coaches-corner/session-plans/u10s/shooting" element={<U10sShootingSession />} />
          <Route path="coaches-corner/session-plans/u10s/passing" element={<U10sPassingSession />} />
          <Route path="coaches-corner/session-plans/u12s/dribbling" element={<U12sDribblingSession />} />
          <Route path="coaches-corner/session-plans/u12s/defending" element={<U12sDefendingSession />} />
          <Route path="coaches-corner/session-plans/u12s/shooting" element={<U12sShootingSession />} />
          <Route path="coaches-corner/session-plans/u12s/passing" element={<U12sPassingSession />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();
