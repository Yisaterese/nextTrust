import { useState } from "react";
import Button from "../../Component/button.jsx";
import { ClipboardCopy, Check } from "lucide-react";

const PensionCard = ({ username, walletAddress, pensionAmount }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-wrap items-center justify-between bg-white shadow-lg rounded-xl p-3 w-full border border-gray-200 mb-4 gap-4 sm:gap-2">
            {/* Left Side - Username & Wallet Address */}
            <div className="w-full sm:w-auto flex-1 min-w-[180px]">
                <p className="text-lg font-semibold">{username}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                    <button onClick={handleCopy} className="text-gray-500 hover:text-gray-700">
                        {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
                    </button>
                </div>
            </div>

            {/* Middle - Accrued Pension Amount */}
            <div className="w-full sm:w-auto text-center flex-1 min-w-[120px]">
                <p className="text-gray-500 text-sm">Accrued Pension</p>
                <div className="py-1 rounded-md font-bold text-lg">
                    ${pensionAmount}
                </div>
            </div>

            {/* Right Side - Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
                <Button color="#272c88" className="w-full sm:w-auto">Pay</Button>
                <Button color="red" className="w-full sm:w-auto">Delete</Button>
            </div>
        </div>
    );
};

export default PensionCard;
