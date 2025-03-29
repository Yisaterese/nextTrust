import WalletChart from "../Component/chart/WalletChart.jsx";
import transactions from "../Component/chart/data.js";

const Analytics = () => {
    return (
        <div className="w-[96%] h-[80vh] mx-auto md:mt-25 md:py-10 bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-4">Wallet Growth Chart</h2>
            <WalletChart transactions={transactions} />
        </div>
    );
};

export default Analytics;
