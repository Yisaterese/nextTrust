
import './App.css'
import NavBar from "./Component/navBar.jsx";
import { Routes, Route} from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
import Footer from "./Component/footer.jsx";

function App() {

  return (
     <div>
         <NavBar/>
         <div>
             <Routes>
                <Route path="/" element={<LandingPage/>}/>
             </Routes>
         </div>
         <Footer/>
     </div>
  )
}

export default App
