import { useState, useRef, useEffect } from "react";
import SideNav from "../../Component/SideNav.jsx";
import PensionCard from "../../Component/organisation/pensioners.jsx";
import { Menu, X, Wallet } from "lucide-react";
import { pensioners } from "../../lists/list.js";
import { useLocation } from "react-router-dom";
import Analytics from "../../Component/analytics.jsx";
import TransactionHistory from "../transactionHistory.jsx";
import Settings from "../settings.jsx";
import Connect from "../../Component/connect.jsx";

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("analytics");
    const [sideNavOpen, setSideNavOpen] = useState(false);
    const [walletOpen, setWalletOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation();
    const walletRef = useRef(null);

    // Filter pensioners based on search
    const filteredPensioners = pensioners.filter((pensioner) =>
        pensioner.username.toLowerCase().replace(/\s/g, "").includes(searchTerm.toLowerCase().replace(/\s/g, ""))
    );

    // Close wallet dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (walletRef.current && !walletRef.current.contains(event.target)) {
                setWalletOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dashboard-container flex h-screen">
            {/* Navbar (For Small Screens) */}
            <div className="fixed top-0 w-full bg-white shadow-md p-4 z-50 flex justify-between items-center">
                {/* Hamburger Menu */}
                <button onClick={() => setSideNavOpen(true)} className="text-gray-700">
                    <Menu size={24} />
                </button>

                {/* Centered Search Bar */}
                <input
                    type="text"
                    placeholder="Search pensioner..."
                    className="px-4 py-2 border rounded-md w-3/5 sm:w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Wallet Icon and Connect Button */}
                <div className="relative" ref={walletRef}>
                    {/* Wallet Icon for Mobile */}
                    <button
                        className="p-2 rounded-full bg-gray-100 shadow md:hidden"
                        onClick={() => setWalletOpen(!walletOpen)}
                    >
                        <Wallet size={24} className="text-gray-700" />
                    </button>

                    {/* Connect Button for Larger Screens */}
                    <div className="hidden md:block">
                        <Connect />
                    </div>

                    {/* Wallet Dropdown for Mobile */}
                    {walletOpen && (
                        <div className=" ] absolute right-5 mt-2 w-75 bg-white h-[150px] rounded-lg shadow-lg p-3">
                            <Connect />
                        </div>
                    )}
                </div>
            </div>

            {/* SideNav (Overlay Mode on Small Screens) */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 text-white shadow-lg z-50 transform ${
                    sideNavOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out sm:translate-x-0 sm:block`}
            >
                {/* Close Button (Small Screens Only) */}
                <button
                    onClick={() => setSideNavOpen(false)}
                    className="absolute top-4 right-4 text-white sm:hidden"
                >
                    <X size={24} />
                </button>

                {/* SideNav Menu Items */}
                <SideNav setActiveSection={setActiveComponent} className="h-full flex flex-col justify-center" />
            </div>

            {/* Click outside to close SideNav (Overlay Effect) */}
            {sideNavOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
                    onClick={() => setSideNavOpen(false)}
                ></div>
            )}

            {/* Main Content Area */}
            {location.pathname !== "/userDashboard" && (
                <div className="flex-1 sm:ml-64 overflow-y-auto p-5 pt-20">
                    {activeComponent === "pensioners" && (
                        <div className="w-full space-y-4">
                            {filteredPensioners.map((pensioner) => (
                                <PensionCard
                                    key={pensioner.id}
                                    username={pensioner.username}
                                    walletAddress={pensioner.walletAddress}
                                    pensionAmount={pensioner.pensionAmount}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {activeComponent === "analytics" && <Analytics />}
            {activeComponent === "history" && <TransactionHistory />}
            {activeComponent === "settings" && <Settings />}
        </div>
    );
}

export default Dashboard;
