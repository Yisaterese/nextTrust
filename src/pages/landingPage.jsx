import Introduction from "../Component/introduction.jsx";
import AboutUs from "../Component/aboutUs.jsx";
import OurService from "../Component/ourService.jsx";
import Benefits from "../Component/benefits.jsx";

const LandingPage = () => {
    return(

        <div className="min-h-screen w-full flex flex-col items-center justify-center">
            <div id="introduction">
                <Introduction/>
            </div>
            <div id="about">
                <AboutUs/>
            </div>
            <div id="services">
                <OurService/>
            </div>
            <div id="benefits">
                <Benefits/>
            </div>
        </div>
    )
}
export default LandingPage;