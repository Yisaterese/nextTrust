import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [registerType, setRegisterType] = useState(null);
    const [formData, setFormData] = useState({
        orgName: "",
        companyEmail: "",
        password: "",
        description: "",
        individualName: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [inviteLink, setInviteLink] = useState(localStorage.getItem("inviteLink") || "");
    const navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};
        const { orgName, companyEmail, password, description, individualName } = formData;

        if (registerType === "org") {
            if (!orgName) newErrors.orgName = "Organization name is required.";
            if (!description) newErrors.description = "Description is required.";
        } else if (registerType === "individual") {
            if (!individualName) newErrors.individualName = "Name is required.";
        }

        if (!companyEmail) newErrors.companyEmail = "Company email is required.";

        if (!password) {
            newErrors.password = "Password is required.";
        } else {
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/;
            if (!passwordRegex.test(password)) {
                newErrors.password = "Password must have at least one capital letter, one number, and one special character.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        if (!validateForm()) return;

        setLoading(true); // Start loading
        const payload = {
            name: registerType === "org" ? formData.orgName : formData.individualName,
            email: formData.companyEmail,
            password: formData.password,
        };

        try {
            const end_point = registerType === "org"
                ? "http://localhost:5000/organizations"
                : "http://localhost:5000/users";

            const response = await axios.post(end_point, payload);

            toast.success("Registration successful!");

            if (registerType === "org") {
                const orgId = response.data.id;
                const generatedLink = `${window.location.origin}/member-login/${orgId}`;

                setInviteLink(generatedLink);
                localStorage.setItem("inviteLink", generatedLink);
                localStorage.setItem("organization", JSON.stringify(response.data));

                navigate("/dashboard");
            } else {
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate("/userDashboard");
            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 md:w-full max-w-md w-[92%]">
                <div className="flex justify-center mb-4 flex-col items-center gap-5 w-[99%]">
                    <button
                        onClick={() => setRegisterType("org")}
                        className={`px-4 py-2 w-[95%] rounded-xl transition-all ${registerType === "org" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                        Register as Organisation
                    </button>
                    <button
                        onClick={() => setRegisterType("individual")}
                        className={`px-4 py-2 w-[95%] rounded-xl transition-all ${registerType === "individual" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                        Register as Individual
                    </button>
                </div>

                {registerType && (
                    <div className="text-center">
                        {registerType === "individual" && (
                            <input
                                type="text"
                                name="individualName"
                                placeholder="Your Name"
                                value={formData.individualName}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                            />
                        )}
                        {errors.individualName && <p className="text-red-500">{errors.individualName}</p>}

                        {registerType === "org" && (
                            <input
                                type="text"
                                name="orgName"
                                placeholder="Organization Name"
                                value={formData.orgName}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                            />
                        )}
                        {errors.orgName && <p className="text-red-500">{errors.orgName}</p>}

                        <input
                            type="email"
                            name="companyEmail"
                            placeholder="Email"
                            value={formData.companyEmail}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        />
                        {errors.companyEmail && <p className="text-red-500">{errors.companyEmail}</p>}

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}

                        {registerType === "org" && (
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                            />
                        )}
                        {errors.description && <p className="text-red-500">{errors.description}</p>}

                        <button
                            onClick={handleRegister}
                            className="bg-blue-500 text-white w-full py-2 rounded mt-4 hover:bg-blue-600 flex items-center justify-center"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                            ) : "Register"}
                        </button>

                        {/* Show invite link if available */}
                        {inviteLink && (
                            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center">
                                <p>Share this link to invite members:</p>
                                <a href={inviteLink} className="text-blue-500 underline">{inviteLink}</a>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
