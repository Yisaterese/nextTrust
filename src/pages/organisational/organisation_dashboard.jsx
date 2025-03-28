import { useState } from "react";
import SideNav from "../../Component/SideNav.jsx";
import PensionCard from "../../Component/organisation/pensioners.jsx";
import ProfileHeader from "../../Component/profile.jsx";

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("pensioners");
    const [searchQuery, setSearchQuery] = useState("");

    const pensioners = [
        { id: 1, username: "Aliko Haruna", walletAddress: "0xABC123DEF456", pensionAmount: "5000" },
        { id: 2, username: "Jonathan Liam", walletAddress: "0xABC123DEF456", pensionAmount: "345000" },
        { id: 3, username: "Nancy Chukwu", walletAddress: "0xABC123DEF456", pensionAmount: "88000" },
        { id: 4, username: "Ayomide Gbenga", walletAddress: "0xABC123DEF456", pensionAmount: "25000" },
        { id: 5, username: "Etim Iyang", walletAddress: "0xABC123DEF456", pensionAmount: "275000" },
    ];

    const currentUser = {

        walletAddress: "0x1234567890ABCDEF",
        balance: "100000",
    };

    // Filter pensioners based on search query
    const filteredPensioners = pensioners.filter((p) =>
        p.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="dashboard-container flex h-screen">
            {/* Fixed Sidebar */}
            <div className="fixed top-0 left-0 h-full w-64">
                <SideNav setActiveComponent={setActiveComponent} />
            </div>

            {/* Scrollable Main Content */}
            <div className="flex-1 ml-64 overflow-y-auto">
                <div className="p-5 pt-20">
                    <ProfileHeader
                        username={currentUser.username}
                        walletAddress={currentUser.walletAddress}
                        balance={currentUser.balance}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery} // Lift state up
                    />
                    {activeComponent === "pensioners" && (
                        <div className="w-full space-y-4">
                            {filteredPensioners.length > 0 ? (
                                filteredPensioners.map((pensioner) => (
                                    <PensionCard
                                        key={pensioner.id}
                                        username={pensioner.username}
                                        walletAddress={pensioner.walletAddress}
                                        pensionAmount={pensioner.pensionAmount}
                                    />
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">No matching pensioners found.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
