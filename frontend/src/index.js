import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import reportWebVitals from './reportWebVitals';
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
import Files from './components/Files';
import AboutNoNav from './components/AboutNoNav';

function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        {/*Homepage and about page with no navbar*/}
        <Route index element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutnonav" element={<AboutNoNav />} />
        {/*All routes from here contain navbar*/}
        {/*Route for profile page*/}
        <Route
          path="/profile"
          element={
            <div>
              <Navbar />
              <Profile />
            </div>
          }
        />
        {/*Route for courses page*/}
        <Route
          path="/courses"
          element={
            <div>
              <Navbar />
              <Courses />
            </div>
          }
        />
        {/*Route for coaches corner elements*/}
        <Route
          path="/coaches-corner/*"
          element={
            <div>
              <Navbar />
              {/*Routes for coaches corner subemenus*/}
              <Routes>
                <Route path="files" element={<Files />} />
                <Route path="formations/5-a-side" element={<FiveASide />} />
                <Route path="formations/7-a-side" element={<SevenASide />} />
                <Route path="formations/9-a-side" element={<NineASide />} />
                <Route path="session-plans/u8s/dribbling" element={<U8sDribblingSession />} />
                <Route path="session-plans/u8s/defending" element={<U8sDefendingSession />} />
                <Route path="session-plans/u8s/shooting" element={<U8sShootingSession />} />
                <Route path="session-plans/u8s/passing" element={<U8sPassingSession />} />
                <Route path="session-plans/u10s/dribbling" element={<U10sDribblingSession />} />
                <Route path="session-plans/u10s/defending" element={<U10sDefendingSession />} />
                <Route path="session-plans/u10s/shooting" element={<U10sShootingSession />} />
                <Route path="session-plans/u10s/passing" element={<U10sPassingSession />} />
                <Route path="session-plans/u12s/dribbling" element={<U12sDribblingSession />} />
                <Route path="session-plans/u12s/defending" element={<U12sDefendingSession />} />
                <Route path="session-plans/u12s/shooting" element={<U12sShootingSession />} />
                <Route path="session-plans/u12s/passing" element={<U12sPassingSession />} />
              </Routes>
            </div>
          }
        />
        {/*Route for about page*/}
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();