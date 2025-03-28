import { useState } from "react";
import SideNav from "../../Component/SideNav.jsx";
import PensionCard from "../../Component/organisation/pensioners.jsx";
import ProfileCard from "../../Component/profile.jsx"; // Assuming this is your ProfileHeader

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("pensioners");

    const pensioners = [
        { id: 1, username: "Aliko Haruna", walletAddress: "0xABC123DEF456", pensionAmount: "5000" },
        { id: 2, username: "Jonathan Liam", walletAddress: "0xABC123DEF456", pensionAmount: "345000" },
        { id: 3, username: "Nancy Chukwu", walletAddress: "0xABC123DEF456", pensionAmount: "88000" },
        { id: 4, username: "Ayomide Gbenga", walletAddress: "0xABC123DEF456", pensionAmount: "25000" },
        { id: 5, username: "Etim Iyang", walletAddress: "0xABC123DEF456", pensionAmount: "275000" },
    ];

    return (
        <div className="dashboard-container flex h-screen"> {/* h-screen for full height */}
            {/* Fixed Sidebar */}
            <div className="fixed top-0 left-0 h-full w-64"> {/* Adjust w-64 as needed */}
                <SideNav setActiveComponent={setActiveComponent} />
            </div>

            {/* Scrollable Main Content */}
            <div className="flex-1 ml-64 overflow-y-auto"> {/* ml-64 matches sidebar width */}
                <div className="relative p-5">
                    {/* Uncomment and adjust ProfileCard if needed */}
                    {/* <ProfileCard /> */}
                    {activeComponent === "pensioners" && (
                        <div className="w-full space-y-4"> {/* space-y-4 for card spacing */}
                            {pensioners.map((pensioner) => (
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
        </div>
    );
}

export default Dashboard;