import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Home.css';
import { backendUrl } from '../config.js';


function HomePage() {
  //Hook to navigate to different routes
  const navigate = useNavigate();
  //State to toggle between login and registration view
  const [isLoginView, setIsLoginView] = useState(true);
  //State to manage form input for both login and registration
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  //Handles form field changes and updates state accordingly
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Handles form submission for both login and registration
  const handleSubmit = async (e) => {
    //Prevents the default form submission action
    e.preventDefault(); 
    //Determines the appropriate endpoint based on whether the user is logging in or registering
    const endpoint = isLoginView ? `${backendUrl}/api/v1/public/login` : `${backendUrl}/api/v1/public/register`;
    try {
      //Attempts to submit the form data to the backend
      const response = await axios.post(endpoint, formData, {
        withCredentials: true,
      });
      //Logic to handle successful login or registration
      if (isLoginView) {
        if (response.status === 200 && response.data.message === 'Authenticated') {
          console.log('User logged-in successfully:', response.data);
          navigate('/profile');
        } else {
          console.error('Login failed:', response.data.message);
        }
      } else {
        if (response.status === 201) {
          console.log('User registered successfully:', response.data);
          navigate('/profile');
        } else {
          console.error('Registration failed:', response.data.message);
        }
      }
    } catch (error) {
      console.error(isLoginView ? 'Login failed:' : 'Registration failed:', error.message);
    }
  };
  //Determines the position of the toggle button based on the view
  const togglePosition = isLoginView ? '0px' : '110px';
  
  //The function renders a form for either login or registration based on `isLoginView`
  return (
    <div>
    <div className="form-box">
      <div className="button-box">
        <div id="btn" style={{ left: togglePosition }}></div>
        <button type="button" className="toggle-btn" onClick={() => setIsLoginView(true)}>Login</button>
        <button type="button" className="toggle-btn" onClick={() => setIsLoginView(false)}>Register</button>
      </div>
      <img src={`${process.env.PUBLIC_URL}/Football-Coaching-Hub.png`} alt="Logo" className = "img-logo"/>
      {/*Conditional rendering based on 'isLoginView' state to display either the login form or registration form*/}
      {isLoginView ? (
      <form className="input-group" onSubmit={handleSubmit} style={{ left: isLoginView ? '50px' : '-400px' }}>
        <input type="email" name="email" className="input-field" placeholder="email address" onChange={handleChange} value={formData.email} autoComplete="email" required />
        <input type="password" name="password" className="input-field" placeholder="password" onChange={handleChange} value={formData.password} autoComplete="current-password" required />
        <button type="submit" className="submit-btn">Login</button>
      </form>
      ) : (
      <form className="input-group" onSubmit={handleSubmit} style={{ left: isLoginView ? '450px' : '50px' }}>
        <input type="text" name="username" className="input-field" placeholder="username" onChange={handleChange} value={formData.username} autoComplete="off" required />
        <input type="email" name="email" className="input-field" placeholder="email address" onChange={handleChange} value={formData.email} autoComplete="off" required />
        <input type="password" name="password" className="input-field" placeholder="password" onChange={handleChange} value={formData.password} autoComplete="off" required />
        <button type="submit" className="submit-btn">Register</button>
      </form>
      )}
    </div>
      <Link to="/aboutnonav" style={{ color: 'white', textDecoration: 'none' }}>
        <button className = "about-button">
          About
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
