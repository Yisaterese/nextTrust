import TransactionCard from "../Component/transactionCard.jsx";
import {useLocation} from "react-router-dom";

const transactions = [
    { amount: 50000, type: "Deposit", time: "2024-03-28 10:30 AM" },
    { amount: 20000, type: "Transfer", time: "2024-03-27 2:15 PM" },
    { amount: 100000, type: "Deposit", time: "2024-03-26 6:45 PM" },
    { amount: 75000, type: "Transfer", time: "2024-03-25 1:10 PM" },
    { amount: 30000, type: "Deposit", time: "2024-03-24 8:30 AM" },
    { amount: 45000, type: "Transfer", time: "2024-03-23 4:50 PM" },
    { amount: 120000, type: "Deposit", time: "2024-03-22 11:05 AM" },
    { amount: 95000, type: "Transfer", time: "2024-03-21 7:25 PM" },
    { amount: 15000, type: "Deposit", time: "2024-03-20 5:40 AM" },
    { amount: 65000, type: "Transfer", time: "2024-03-19 9:15 PM" },
    { amount: 200000, type: "Deposit", time: "2024-03-18 12:00 PM" },
    { amount: 80000, type: "Transfer", time: "2024-03-17 3:30 PM" },
    { amount: 5000, type: "Deposit", time: "2024-03-16 6:20 AM" },
    { amount: 25000, type: "Transfer", time: "2024-03-15 2:50 PM" },
    { amount: 135000, type: "Deposit", time: "2024-03-14 9:40 AM" },
    { amount: 18000, type: "Transfer", time: "2024-03-13 7:00 PM" },
    { amount: 9500, type: "Deposit", time: "2024-03-12 10:15 AM" },
    { amount: 110000, type: "Transfer", time: "2024-03-11 11:30 PM" },
    { amount: 50000, type: "Deposit", time: "2024-03-10 5:00 PM" },
    { amount: 40000, type: "Transfer", time: "2024-03-09 1:45 PM" },
];


const TransactionHistory = () => {
    const location = useLocation();

    return (
        <div className={`p-5 space-y-4 ${location.pathname ==='/dashboard'?"w-full" : "w-[80%] ml-10 md:ml-80 mt-25"} overflow-y-auto mt-20`}>
            {transactions.map((transaction, index) => (
                <TransactionCard key={index} {...transaction} />
            ))}
        </div>
    );
};

export default TransactionHistory;
