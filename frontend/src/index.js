import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import reportWebVitals from './reportWebVitals';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile'
import Courses from './components/coursedatabase/Courses'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="registration" element={<RegistrationForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="profile" element={<Profile />} />
      <Route path="courses" element={<Courses />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals()


