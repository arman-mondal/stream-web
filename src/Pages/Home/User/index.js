import UserNavbar from "../../../Components/Navbar/User";
import UserVideos from "../../../Components/Videos/User";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';
const UserHome =()=>{

    const { token, logout } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://myapi.armanmondal.in/user/protected', {
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
  
   



return(

<div className="h-screen w-full" >
<UserNavbar logout={logout} />
<div className="mt-5" id="pplr" >
    <h1 className="text-2xl  font-bold ml-10 mt-10" >Popular Videos</h1>
<UserVideos/>

</div>

<div className="mt-25" id="spcl" >
    <h1 className="text-2xl  font-bold ml-10 mt-10" >Special Latest Videos</h1>
<UserVideos/>

</div>

<div className="mt-45" id="rcfu">
    <h1 className="text-2xl  font-bold ml-10 mt-10" >Videos Recommended For You</h1>
<UserVideos/>

</div>
    </div>
)

}

export default UserHome