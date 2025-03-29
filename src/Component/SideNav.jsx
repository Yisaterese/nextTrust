import { FaCog, FaUsers, FaHistory, FaChartBar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {toast} from "react-toastify";

const SideNav = ({ setActiveSection }) => {
    const location = useLocation();
    const [inviteLink, setInviteLink] = useState("");

    useEffect(() => {
        // Retrieve invite link from localStorage
        const storedLink = localStorage.getItem("inviteLink");
        if (storedLink) {
            setInviteLink(storedLink);
        }
    }, []);

    const copyToClipboard = () => {
        if (inviteLink) {
            navigator.clipboard.writeText(inviteLink).then(() => {
                toast.success("Invite link copied to clipboard!");
            });
        }
    };

    return (
        <div className="sidebar w-[250px] h-screen bg-gradient-to-b from-[#141f4b] to-[#3b36c6] p-5 text-white md:w-[250px] sm:w-20 transition-all duration-300">
            <h1 className="text-white text-3xl font-extrabold pb-12 sm:text-lg sm:pb-6">
                NexTrust
            </h1>
            <p className="text-white font-bold font-sans-serif text-[15px] pb-5">
                Welcome! to NextTrust
            </p>

            {/* Display Invite Link */}
            {location.pathname !== "/userDashboard" && inviteLink && (
                <div className="bg-white text-black p-2 rounded-md text-sm mb-4 flex items-center justify-between">
                    <span className="truncate max-w-[180px]">{inviteLink}</span>
                    <button
                        onClick={copyToClipboard}
                        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                    >
                        Copy Link
                    </button>
                </div>
            )}

            <nav>
                <ul className="list-none p-0">
                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                        onClick={() => setActiveSection("analytics")}
                    >
                        <FaUsers className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Analysis</span>
                    </li>

                    {location.pathname !== "/userDashboard" && (
                        <li
                            className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                            onClick={() => setActiveSection("pensioners")}
                        >
                            <FaChartBar className="mr-2.5 sm:mr-1" />
                            <span className="sm:hidden md:inline">Pensioners</span>
                        </li>
                    )}

                    <li
                        className="mb-8 cursor-pointer flex items-center p-2.5 rounded-md hover:bg-[#34495e] sm:p-1 sm:mb-4"
                        onClick={() => setActiveSection("history")}
                    >
                        <FaHistory className="mr-2.5 sm:mr-1" />
                        <span className="sm:hidden md:inline">Transaction History</span>
                    </li>

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
