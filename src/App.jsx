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
}

export default App;