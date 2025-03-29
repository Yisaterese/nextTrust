import React from "react";
import { Check, ClipboardCopy, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

const ProfileHeader = ({
                           username = "Unknown",
                           walletAddress = "0x000000000000",
                           searchQuery,
                           setSearchQuery
                       }) => {
    const [copied, setCopied] = React.useState(false);
    const location = useLocation();

    // Handle copying wallet address to clipboard
    const handleCopy = () => {
        if (walletAddress && navigator.clipboard) {
            navigator.clipboard.writeText(walletAddress)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
                })
                .catch((err) => console.error("Failed to copy:", err));
        }
    };

    // Truncate wallet address for display
    const truncatedAddress = walletAddress.length >= 10
        ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
        : walletAddress || "N/A";

    // Get the first letter of the username for the profile icon
    const initial = username.length > 0 ? username.charAt(0).toUpperCase() : "?";

    return (
        <div className="fixed top-0 left-64 right-0 flex items-center justify-between py-4 bg-white shadow-md z-50 px-4">
            {/* Left Spacer */}
            <div className="flex-1"></div>

            {/* Search Bar (Hidden on /userDashboard) */}
                <div className="flex-1 flex justify-center relative">
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search pensioners..."
                            className="pl-10 pr-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        />
                        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

            {/* Right Section: Wallet Address, Copy Button, Profile Icon */}
            <div className="flex-1 flex justify-end items-center gap-6">
                {/* Wallet Address and Copy Button */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{truncatedAddress}</span>
                    <button
                        onClick={handleCopy}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        disabled={!navigator.clipboard}
                    >
                        {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
                    </button>
                </div>

                {/* Profile Icon */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold">{initial}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;