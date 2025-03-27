import Introduction from "../Component/introduction.jsx";
import AboutUs from "../Component/aboutUs.jsx";
import OurService from "../Component/ourService.jsx";

const LandingPage = () => {
    return(

        <div className="min-h-screen w-full flex flex-col items-center justify-center">
            <Introduction/>
            <AboutUs/>
            <OurService/>
        </div>
    )
}
export default LandingPage;