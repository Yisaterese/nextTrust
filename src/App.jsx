import './App.css';
import NavBar from "./Component/navBar.jsx";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import Dashboard from "./pages/organisational/organisation_dashboard.jsx";

function App() {
    return (
        <div>
            {/*<NavBar />*/}
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    );
import {Routes, Route, useLocation} from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import Footer from "./Component/footer.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import MemberRegisterPage from "./pages/memberRegisterPage.jsx";
import ZkLoginPage from "./pages/zkLogin.jsx";

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
             </Routes>
         </div>
         <Footer/>
     </div>
  )
}

export default App;