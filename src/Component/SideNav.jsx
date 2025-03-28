import {
    FaCog,
    FaUsers,
    FaHistory,
    FaChartBar // Added for Analysis
} from 'react-icons/fa';

function SideNav() {
    return (
        <div
            className="sidebar  w-[250px] h-screen bg-gradient-to-b from-[#141f4b] to-[#3b36c6] p-5 text-white md:w-[250px] sm:w-20 transition-all duration-300"
        >
            <h1
                className="text-white text-3xl font-extrabold pb-12 sm:text-lg sm:pb-6"
            >
                NexTrust
            </h1>

            <nav>
                <ul className="list-none p-0">
                    {/* Pensioners */}
                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                    >
                        <FaUsers className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Pensioners</span>
                    </li>

                    {/* Analysis */}
                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                    >
                        <FaChartBar className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Analysis</span>
                    </li>


                    {/* Transaction History */}
                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                    >
                        <FaHistory className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Transaction History</span>
                    </li>

                    {/* Settings */}
                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                    >
                        <FaCog className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Settings</span>
                    </li>


                </ul>
            </nav>
        </div>
    );
}

export default SideNav;