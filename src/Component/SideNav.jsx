import { FaCog, FaUsers, FaHistory, FaChartBar } from "react-icons/fa";
import {useLocation} from "react-router-dom";

const SideNav = ({ setActiveSection }) => {
    const location = useLocation();
    return (
        <div className="sidebar w-[250px] h-screen bg-gradient-to-b from-[#141f4b] to-[#3b36c6] p-5 text-white md:w-[250px] sm:w-20 transition-all duration-300">
            <h1 className="text-white text-3xl font-extrabold pb-12 sm:text-lg sm:pb-6">
                NexTrust
            </h1>

            <nav>
                <ul className="list-none p-0">
                    {/* Pensioners */}
                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                        onClick={() => setActiveSection("analytics")}
                    >
                        <FaUsers className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Analysis</span>
                    </li>

                    {/* Analysis */}
                    {location.pathname !== '/userDashboard' && (<li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                        onClick={() => setActiveSection("pensioners")}
                    >
                        <FaChartBar className="mr-2.5 sm:mr-1"/>
                        <span className="sm:hidden md:inline">Pensioners</span>
                    </li>)}

                    {/* Transaction History */}
                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                        onClick={() => setActiveSection("history")}
                    >
                        <FaHistory className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Transaction History</span>
                    </li>

                    {/* Settings */}
                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                        onClick={() => setActiveSection("settings")}
                    >
                        <FaCog className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Settings</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
