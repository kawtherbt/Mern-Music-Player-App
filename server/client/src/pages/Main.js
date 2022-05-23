import './Main.css';
import {Route,Routes} from "react-router-dom";
import { Fragment } from "react";


import { BrowserRouter as Router} from "react-router-dom";
import Home from './index'
import LoginPage from './login';
import SignupPage from './signup';
import Navbar from '../components/Navbar';
import AboutPage from './about';
import DownloadPage from './download';
import SupportPage from './support';
import ForgotPassword from './ForgotPassword';
import AdminPage from './admin';
import ProfilePage from './profile'
import NotFound from './NotFound';
import NoAccess from './NoAccess';
import AdminRouter from '../components/AdminRouter/AdminRouter'
import ForceNavigate from '../components/ForceRedirect/ForceRedirect';
import PrivateRouter from '../components/PrivateRouter/PrivateRouter';



function Main() {
  const user= {
    isConnected:false,
    role: "ADMIN"}
	
  
  return (
    <Fragment>
			
					

    
    <Router >
     <Navbar />
      <Routes>
          <Route path="/" element={<Home/> } exact />
          <Route path="/about" element={<AboutPage/> }  />
          <Route path="/download" element={<DownloadPage/> }  />
          <Route path="/support" element={<SupportPage/> }  />
          <Route path="/login" element={<ForceNavigate user={user}><LoginPage/></ForceNavigate> }  />
          <Route path="/signup" element={<ForceNavigate user={user}><SignupPage/></ForceNavigate> }  />
          <Route path="/forgot-password" element={<ForgotPassword/> }  />
          <Route path="/admin" element={<AdminRouter user={user}><AdminPage/></AdminRouter> }  />
          <Route path="/profile" element={<PrivateRouter user={user}><ProfilePage/></PrivateRouter> }  />
          <Route path="*" element={<NotFound/> }  />
          <Route path="/noaccess" element={<NoAccess/> }  />


          
      </Routes>
    </Router>
   
    </Fragment>

  );
}

export default Main;
