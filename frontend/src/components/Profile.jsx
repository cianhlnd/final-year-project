import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [userDetails, setUserDetails] = useState({ username: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
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
      const response = await fetch('http://localhost:3001/api/v1/user/logout', {
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
      <h2>Profile Details</h2>
      <p>Username: {userDetails.username}</p>
      <p>Email: {userDetails.email}</p>
      <Link to="/homepage" style={{ color: 'white', textDecoration: 'none' }}>
        <button onClick={handleLogout}>
          Logout
        </button>
      </Link>
    </div>
  );
}

export default Profile;