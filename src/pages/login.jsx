import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"; // Import axios

const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:5000/auth", {
                email,
                password,
            });

            localStorage.setItem("user", JSON.stringify(data.user));
            toast.success("Login Successful");

            if (data.type === "user") {
                navigate("/userDashboard");
            } else if (data.type === "organization") {
                navigate("/dashboard");
            }
        } catch (error) {
            toast.error(error.response?.data?.error || "Something went wrong!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white p-2 rounded-md hover:bg-green-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginCard;
