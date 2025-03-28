import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MemberLoginPage = () => {
    const { orgId } = useParams();
    const [organizationName, setOrganizationName] = useState("");
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    // Fetch organization details based on orgId
    useEffect(() => {
        const fetchOrganization = async () => {
            try {
                const response = await fetch(`https://your-api.com/organizations/${orgId}`);
                const data = await response.json();
                setOrganizationName(data.name); // Store the organization name
            } catch (error) {
                console.error("Error fetching organization:", error);
                setOrganizationName("Unknown Organization");
            }
        };

        fetchOrganization();
    }, [orgId]);

    const validateForm = () => {
        let newErrors = {};
        const { email, password } = formData;

        if (!email) newErrors.email = "Email is required.";
        if (!password) newErrors.password = "Password is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMemberLogin = () => {
        if (validateForm()) {
            setTimeout(() => {
                setSuccessMessage(`Successfully logged into ${organizationName}`);
            }, 1000);
        }
    };

    // Function to handle zkLogin authentication
    const handleZkLogin = () => {
        console.log("zkLogin initiated...");
        // Implement zkLogin authentication logic here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Member Login</h2>

                <p className="text-center text-lg font-semibold mb-4">
                    Logging into: <span className="text-blue-500">{organizationName}</span>
                </p>

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}

                <button
                    onClick={handleMemberLogin}
                    className="bg-blue-500 text-white w-full py-2 rounded mt-4"
                >
                    Login
                </button>

                {/* zkLogin Button */}
                <button
                    onClick={handleZkLogin}
                    className="bg-gray-800 text-white w-full py-2 rounded mt-4"
                >
                    Login with zkLogin
                </button>

                {successMessage && (
                    <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
                        {successMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemberLoginPage;
