import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

const ZkLoginPage = () => {
    const [user, setUser] = useState(null);

    const handleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const userInfo = await fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
            }).then(res => res.json());

            // Simulating wallet creation (In real case, integrate with zkLogin wallet)
            const walletAddress = `0x${Math.random().toString(36).substr(2, 12)}`;
            const walletBalance = (Math.random() * 10).toFixed(3); // Random balance

            const userData = {
                username: userInfo.name,
                email: userInfo.email,
                walletAddress,
                walletBalance
            };

            setUser(userData);
            localStorage.setItem("zkUser", JSON.stringify(userData));
        },
        onError: () => console.log("Login Failed"),
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">Login with Google (zkLogin)</h2>
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded"
                    onClick={handleLogin}
                >
                    Sign in with Google
                </button>

                {user && (
                    <div className="mt-4 p-3 bg-gray-200 rounded">
                        <p><strong>Name:</strong> {user.username}</p>
                        <p><strong>Wallet:</strong> {user.walletAddress}</p>
                        <p><strong>Balance:</strong> {user.walletBalance} ETH</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ZkLoginPage;
