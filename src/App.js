import './App.css';
import UserLoginPage from './Pages/AuthPages/UserLoginPage';
import UserRegistrationPage from './Pages/AuthPages/UserRegisterPage';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Routes/PrivateRoutes';
import UserHome from "./Pages/Home/User/index"
import { BrowserRouter as Router  ,Routes,Route ,Navigate, BrowserRouter} from 'react-router-dom';
import DashboardPage from './Context/DashboardPage';
import StreamerSignUp from './Pages/AuthPages/StreamerSignUp';
import StreamerLogin from './Pages/AuthPages/StreamerLogin';
import StreamerHome from './Pages/Home/Streamer';
import { StreamerAuthProvider } from './Context/StreamerAuthContext';
function App() {
  return (
<div>
<AuthProvider>  
  <BrowserRouter>
      <Routes>
        <Route path='/user/login' element={<UserLoginPage/>}/>
        <Route path='/user/signup' element={<UserRegistrationPage/>}/>
        <Route path='/user/dashboard' Component={UserHome}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
<StreamerAuthProvider>
  <BrowserRouter>
  <Routes>
  <Route path='/streamer/signup' element={<StreamerSignUp/>}/>
        <Route path='/streamer/login' element={<StreamerLogin/>}/>
<Route path='/streamer/dashboard' Component={StreamerHome}/>

  </Routes>
  </BrowserRouter>
</StreamerAuthProvider>


</div>
);
}

export default App;
