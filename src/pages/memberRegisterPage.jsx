import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const MemberLoginPage = () => {
    const { orgId } = useParams();
    const navigate = useNavigate();
    const [organizationName, setOrganizationName] = useState("Loading...");
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchOrganization = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/organizations/${orgId}`);

                setOrganizationName(response.data.name);
            } catch (error) {
                console.error("Error fetching organization:", error);
                setOrganizationName("Unknown Organization");
            }
        };
        fetchOrganization();
    }, [orgId]);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMemberRegister = async () => {
        if (!validateForm()) return;

        try {
            const response = await axios.post("http://localhost:5000/users", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                organizationId: orgId
            });

            localStorage.setItem("user", JSON.stringify(response.data));
            toast.success("Registration successful!");
            navigate("/userDashboard");
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Join Organization</h2>
                <p className="text-center text-lg font-semibold mb-4">Joining: <span className="text-blue-500">{organizationName}</span></p>

                <input type="name" name="name" placeholder="name" value={formData.name} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mt-2" />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mt-2" />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded mt-2" />
                {errors.password && <p className="text-red-500">{errors.password}</p>}

                <button onClick={handleMemberRegister} className="bg-blue-500 text-white w-full py-2 rounded mt-4">Join</button>
            </div>
        </div>
    );
};

export default MemberLoginPage;
