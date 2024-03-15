import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import '../styles/Profile.css'
import { backendUrl } from '../config.js';

function Profile() {
  const [userDetails, setUserDetails] = useState({ username: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/v1/user/profile`, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUserDetails(data);
        } else {
          console.error('Failed to fetch profile details');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchProfile();
  }, []);


  const handleLogout = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/v1/user/logout`, {
        method: 'GET',
        credentials: 'include', 
      });

      if (response.ok) {
        const isCookieCleared = !response.headers.has('set-cookie');
        
        if (isCookieCleared) {
          console.log('Logout successful');
        } else {
          console.error('Logout failed - Authentication cookie still present');
        }
      } else {
        console.error('Logout failed - Server response not OK');
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  return (
    <div>
      <div className = "profile-container">
        <h2>Profile Details</h2>
        <p>Username: {userDetails.username}</p>
        <p>Email: {userDetails.email}</p>
        <Link to="/homepage" style={{ color: 'white', textDecoration: 'none' }}>
          <button className = "logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </div>
      <div className = "light-bulb">
        <FaLightbulb size={100} color="yellow"/>
      </div>
      <div className="speech-bubble">
        <div className="speech-text">
          <div>
            <strong>Tip of the Week:</strong>
          </div>
          <div>
            IDEAL: Introduce, Demonstrate, Explain, Assess, Link
          </div>
        </div>
        <FaComment size={200} color="white"/>
      </div>
    </div>
  );
}

export default Profile;