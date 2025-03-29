import React from "react";

const TransactionCard = ({ amount, type, time }) => {
    return (
        <div className={`p-4 rounded-lg shadow-md flex justify-between items-center md:w-[96%] w-[100%]
            ${type === "Deposit" ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"}
        `}>
            <div>
                <p className="text-gray-700 font-semibold">{type}</p>
                <p className="text-sm text-gray-500">{time}</p>
            </div>
            <p className={`text-lg font-bold ${type === "Deposit" ? "text-green-600" : "text-red-600"}`}>
                ${amount.toLocaleString()}
            </p>
        </div>
    );
};

export default TransactionCard;
