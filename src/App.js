import './App.css';
import UserLoginPage from './Pages/AuthPages/UserLoginPage';
import UserRegistrationPage from './Pages/AuthPages/UserRegisterPage';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Routes/PrivateRoutes';
import UserHome from "./Pages/Home/User/index"
import { BrowserRouter as Router  ,Routes,Route ,Navigate, BrowserRouter} from 'react-router-dom';
import DashboardPage from './Context/DashboardPage';
function App() {
  return (
<AuthProvider>  
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLoginPage/>} />
        <Route path='/user/login' element={<UserLoginPage/>}/>
        <Route path='/user/register' element={<UserRegistrationPage/>}/>
        <Route path='/user/dashboard' Component={UserHome}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
