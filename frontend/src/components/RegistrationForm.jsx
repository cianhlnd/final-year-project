import { useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Registration.css'

function RegistrationForm() {
  const navigate = useNavigate ();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/v1/public/register', formData, {
        withCredentials: true, 
      });


      if (response.status === 201) {
        console.log('User registered successfully:', response.data);

        // Redirect to the profile page after successful registration
        navigate('/profile');
      } else {
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className = "register-input-container">
          <label className = "register-input-label">Username:</label>
          <input type="text" name="username" className = "register-input" onChange={handleChange} value={formData.username} required />
          <label className = "register-input-label">Email:</label>
          <input type="email" name="email" className = "register-input" onChange={handleChange} value={formData.email} required />
          <label className = "register-input-label">Password:</label>
          <input type="password" name="password" className = "register-input" onChange={handleChange} value={formData.password} required />
          <button type="submit" className="register-button">
        Register
      </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;