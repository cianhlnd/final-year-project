import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import '../styles/Profile.css'
import { backendUrl } from '../config.js';

function Profile() {
  //State that stores user details, initially empty
  const [userDetails, setUserDetails] = useState({ username: '', email: '' });

  //useEffect hook that fetches profile details from the backend once the component mounts
  useEffect(() => {
    //Async function that fetches user profile
    const fetchProfile = async () => { 
      try {
        const response = await fetch(`${backendUrl}/api/v1/user/profile`, {
          method: 'GET',
          credentials: 'include', //Includes credentials for cookie-based authentication
        });

        if (response.ok) {
          const data = await response.json(); //Parses JSON data from response
          setUserDetails(data); //Updates state with user details
        } else {
          console.error('Failed to fetch profile details');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchProfile();
  }, []); //Empties dependency array means this effect runs once on component mount

  //Function that handles logout action
  const handleLogout = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/v1/user/logout`, {
        method: 'GET',
        credentials: 'include', 
      });

      if (response.ok) {
        //Checks if the cookie was cleared
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

  //Renders Profile page's UI
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