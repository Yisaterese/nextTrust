import dummyTransactions from "../../lists/list.js";
import TransactionCard from "./Transactions.jsx";

const TransactionHistory = () => {
    return (
        <div className="space-y-4 p-4">
            {dummyTransactions.map((transaction) => (
                <TransactionCard key={transaction.txId} transaction={transaction} />
            ))}
        </div>
    );
};

export default TransactionHistory;
