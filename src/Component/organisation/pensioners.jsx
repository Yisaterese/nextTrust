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
        <div className=" flex items-center justify-between bg-white shadow-lg rounded-xl p-3 w-full border border-gray-200 mb-4">
            {/* Left Side - Username & Wallet Address */}
            <div className=" block">
                <p className="text-lg font-semibold">{username}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                    <button onClick={handleCopy} className="text-gray-500 hover:text-gray-700">
                        {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
                    </button>
                </div>
            </div>

                {/* Middle - Accrued Pension Amount */}
                <div className="text-center block px-4">
                    <p className="text-gray-500 text-sm">Accrued Pension</p>
                    <div className="bg-gray-100 w-full py-1 rounded-md font-bold text-lg">
                        ${pensionAmount}
                    </div>
                </div>

                {/* Right Side - Buttons */}
                <div className="flex flex-col gap-2">
                    <Button color="#272c88" className="w-full">Pay</Button>
                    <Button color="red" className="w-full">Delete</Button>
                </div>
        </div>
    );
};

export default PensionCard;
