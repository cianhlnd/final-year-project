import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Profile () {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/user/authenticate', { withCredentials: true });

        if (response.data && response.data.username && response.data.email) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
      <Link to="/courses">
        <button>Go to Courses Database</button>
      </Link>
      <Link to="/u8sSession">
        <button>Go to u8sSession</button>
      </Link>
    </div>
  );
};

export default Profile;

