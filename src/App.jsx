
import './App.css'
import NavBar from "./Component/navBar.jsx";
import { Routes, Route} from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";

function App() {

  return (
     <div>
         <NavBar/>
         <div>
             <Routes>
                <Route path="/" element={<LandingPage/>}/>
             </Routes>
         </div>
     </div>
  )
}

export default App
