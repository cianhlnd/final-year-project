import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css';
import '../styles/Login.css';

function LoginForm() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/v1/public/login', formData);

      if (response.status === 200 && response.data.message === 'Authenticated') {
        console.log('User logged-in successfully:', response.data);

        // Redirect to the profile page after successful login
        navigate('/profile');
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input-label">Email:</label>
          <input type="email" name="email" onChange={handleChange} value={formData.email} required />
          <label className="input-label">Password:</label>
          <input type="password" name="password" onChange={handleChange} value={formData.password} required />
          <button type="submit" className="register-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;