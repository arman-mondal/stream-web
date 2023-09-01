import UserNavbar from "../../../Components/Navbar/User";
import UserVideos from "../../../Components/Videos/User";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StreameruseAuth } from '../../../Context/StreamerAuthContext';
const StreamerHome =()=>{

    const { token, logout } = StreameruseAuth();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:5000/streamer/protected', {
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
            navigate('/streamer/login');
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
  
   



return(

<div className="h-screen w-full" >

    </div>
)

}

export default StreamerHome