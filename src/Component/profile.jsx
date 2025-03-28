import React, { useState } from "react";
import { Check, ClipboardCopy } from "lucide-react"; // Ensure lucide-react is installed

const ProfileHeader = ({ username = "Unknown", walletAddress = "0x000000000000", balance = "0" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (walletAddress && navigator.clipboard) {
            navigator.clipboard.writeText(walletAddress).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            }).catch((err) => console.error("Failed to copy:", err));
        }
    };

    // Ensure walletAddress is a string and has enough length
    const truncatedAddress = walletAddress && walletAddress.length >= 10
        ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
        : walletAddress || "N/A";

    // Ensure username is a string
    const initial = username && typeof username === "string" && username.length > 0
        ? username.charAt(0).toUpperCase()
        : "?";

    return (
        <div className="fixed top-4 right-4 flex items-center gap-6">
            {/* Wallet Address and Copy Button */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{truncatedAddress}</span>
                <button
                    onClick={handleCopy}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    disabled={!navigator.clipboard} // Disable if clipboard API is unavailable
                >
                    {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
                </button>
            </div>

            {/* Balance */}
            <div className="text-right">
                <p className="text-sm text-gray-500">Balance</p>
                <p className="text-lg font-semibold text-gray-800">{balance} NGN</p>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">{initial}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{username}</span>
            </div>
        </div>
    );
};

export default ProfileHeader;