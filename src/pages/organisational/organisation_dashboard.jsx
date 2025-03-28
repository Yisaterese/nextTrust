import { useState } from "react";
import SideNav from "../../Component/SideNav.jsx";
import PensionCard from "../../Component/organisation/pensioners.jsx";
import { Menu, X } from "lucide-react";
import { pensioners } from "../../lists/list.js";

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("pensioners");
    const [sideNavOpen, setSideNavOpen] = useState(false); // Control SideNav visibility
    const [walletOpen, setWalletOpen] = useState(false); // Control Wallet dropdown visibility
    const [searchTerm, setSearchTerm] = useState(""); // Store search input

    // Wallet details (set dynamically)
    const [walletName, setWalletName] = useState("Organisation");
    const [walletBalance, setWalletBalance] = useState("₦500,000");
    const [walletAddress, setWalletAddress] = useState("0xABC123DEF456");

    const filteredPensioners = pensioners.filter((pensioner) =>
        pensioner.username.toLowerCase().replace(/\s/g, "").includes(searchTerm.toLowerCase().replace(/\s/g, ""))
    );

    return (
        <div className="dashboard-container flex h-screen">
            {/* Navbar (For Small Screens) */}
            <div className="fixed top-0 w-full bg-white shadow-md p-4 z-50 flex justify-between items-center ">
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

                {/* Wallet Button */}
                <div className="relative">
                    <button
                        className="bg-[#272c88] text-white px-4 py-2 rounded-md"
                        onClick={() => setWalletOpen(!walletOpen)}
                    >
                        Wallet
                    </button>

                    {/* Wallet Dropdown */}
                    {walletOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-4 text-gray-700">
                            <p className="font-semibold">Name: {walletName}</p>
                            <p>Balance: {walletBalance}</p>
                            <p className="truncate">Address: {walletAddress}</p>
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
                <SideNav setActiveComponent={setActiveComponent} className="h-full flex flex-col justify-center" />
            </div>

            {/* Click outside to close SideNav (Overlay Effect) */}
            {sideNavOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
                    onClick={() => setSideNavOpen(false)}
                ></div>
            )}

            {/* Main Content Area */}
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
        </div>
    );
}

export default Dashboard;
