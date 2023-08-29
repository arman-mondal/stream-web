// DashboardPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function DashboardPage() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/protected', {
          method: 'GET',
          headers: {
            Authorization: token,
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          setLoading(false);
        } else {
          // If the token is not valid, log the user out and navigate to the login page
          logout();
          navigate('/user/login');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [token, logout, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
      <h1>{data.user.email}</h1>
      <button onClick={logout}>Logout</button>
      </ul>
    </div>
  );
}

export default DashboardPage;
