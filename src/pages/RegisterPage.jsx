import { useState } from "react";

const RegisterPage = () => {
    const [registerType, setRegisterType] = useState(null);
    const [formData, setFormData] = useState({
        orgName: "",
        companyEmail: "",
        password: "",
        description: "",
    });
    const [errors, setErrors] = useState({});
    const [orgLink, setOrgLink] = useState("");

    const validateForm = () => {
        let newErrors = {};
        const { orgName, companyEmail, password, description } = formData;

        if (!orgName) newErrors.orgName = "Organization name is required.";
        if (!companyEmail) newErrors.companyEmail = "Company email is required.";
        if (!description) newErrors.description = "Description is required.";
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

    const handleOrgRegister = () => {
        if (validateForm()) {
            const uniqueId = Math.random().toString(36).substr(2, 9); // Generate a unique ID
            const link = `https://yourapp.com/register/member/${uniqueId}`;
            setOrgLink(link);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 md:w-full  max-w-md w-[92%] ">
                <div className="flex justify-center mb-4 flex-col items-center gap-5 w-[99%]">
                    <button
                        className={`px-4 py-2 bg-custom text-white w-[95%] rounded-xl cursor-pointer hover:px-5 hover:py-3 transition-all  ${registerType === "org" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setRegisterType("org")}
                    >
                        Register as Organisation
                    </button>
                    <button
                        className={`px-4 py-2 bg-gray-200 text-gray-700 w-[95%] rounded-xl cursor-pointer hover:px-5 hover:py-3 transition-all ${registerType === "individual" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        onClick={() => setRegisterType("individual")}
                    >
                        Register as Individual
                    </button>
                </div>

                {registerType === "individual" && (
                    <div className="text-center">
                        <p className="text-gray-700">Continue with zkLogin</p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                            zkLogin
                        </button>
                    </div>
                )}

                {registerType === "org" && (
                    <div>
                        <input
                            type="text"
                            name="orgName"
                            placeholder="Organization Name"
                            value={formData.orgName}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        />
                        {errors.orgName && <p className="text-red-500">{errors.orgName}</p>}

                        <input
                            type="email"
                            name="companyEmail"
                            placeholder="Company Email"
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

                        <textarea
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"
                        />
                        {errors.description && <p className="text-red-500">{errors.description}</p>}

                        <button
                            onClick={handleOrgRegister}
                            className="bg-blue-500 text-white w-full py-2 rounded mt-4"
                        >
                            Register Organization
                        </button>

                        {orgLink && (
                            <div className="mt-4 p-2 bg-gray-100 rounded">
                                <p className="text-sm">Share this link with your members:</p>
                                <p className="text-blue-600 break-all">{orgLink}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
