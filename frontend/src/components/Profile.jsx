import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
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
    <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>
      <button onClick={handleLogout}>
        Logout
      </button>
    </Link>
  );
}

export default Profile;
