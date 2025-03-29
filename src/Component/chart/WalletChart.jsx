import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WalletChart = ({ transactions }) => {
    // Extract dates and amounts
    const dates = transactions.map((t) => t.date);
    const amounts = transactions.map((t) => t.amount);

    // Chart data
    const data = {
        labels: dates,
        datasets: [
            {
                label: "Money Entering Wallet",
                data: amounts,
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4, // Smooth curve
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: { display: true },
            tooltip: { enabled: true },
        },
    };

    return <Line data={data} options={options} />;
};

export default WalletChart;
