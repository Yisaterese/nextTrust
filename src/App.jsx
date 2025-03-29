import './App.css';
import NavBar from "./Component/navBar.jsx";
import {Routes, Route, useLocation} from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import Dashboard from "./pages/organisational/organisation_dashboard.jsx";

import Footer from "./Component/footer.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import MemberRegisterPage from "./pages/memberRegisterPage.jsx";
import ZkLoginPage from "./pages/zkLogin.jsx";
import UserDashBoard from "./pages/organisational/userDashBoard.jsx";

import Connect from "./Component/connect.jsx"; // Correct import


function App() {

    const  location = useLocation();
  return (
     <div>
         {location.pathname !== '/dashboard' && (<NavBar/>)}
         <div>
             <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/member" element={<MemberRegisterPage/>}/>
                <Route path="/zkLogin" element={<ZkLoginPage/>}/>
                 <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="/userDashboard" element={<UserDashBoard/>} />
                 <Route path="/connect" element={<Connect/>} />
             </Routes>
         </div>
         <Footer/>
     </div>
  )
}

export default App;