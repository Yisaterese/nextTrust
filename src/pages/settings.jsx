import { useState } from "react";

const Settings = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        profilePicture: "https://via.placeholder.com/100",
    });

    const [notifications, setNotifications] = useState({
        emailAlerts: true,
        pushNotifications: false,
    });

    const [security, setSecurity] = useState({
        password: "",
        enable2FA: false,
    });

    const [preferences, setPreferences] = useState({
        theme: "light",
        language: "English",
    });

    return (
        <div className="w-full max-w-3xl mx-auto p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>

            {/* Profile Settings */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Profile</h3>
                <div className="flex items-center space-x-4">
                    <img src={profile.profilePicture} alt="Profile" className="w-16 h-16 rounded-full" />
                    <div>
                        <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="border p-2 rounded w-full"
                        />
                        <input
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            className="border p-2 rounded w-full mt-2"
                        />
                    </div>
                </div>
            </section>

            {/* Security Settings */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <input
                    type="password"
                    placeholder="New Password"
                    value={security.password}
                    onChange={(e) => setSecurity({ ...security, password: e.target.value })}
                    className="border p-2 rounded w-full"
                />
                <label className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        checked={security.enable2FA}
                        onChange={() => setSecurity({ ...security, enable2FA: !security.enable2FA })}
                        className="mr-2"
                    />
                    Enable Two-Factor Authentication (2FA)
                </label>
            </section>

            {/* Notification Settings */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={notifications.emailAlerts}
                        onChange={() => setNotifications({ ...notifications, emailAlerts: !notifications.emailAlerts })}
                        className="mr-2"
                    />
                    Email Alerts
                </label>
                <label className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        checked={notifications.pushNotifications}
                        onChange={() => setNotifications({ ...notifications, pushNotifications: !notifications.pushNotifications })}
                        className="mr-2"
                    />
                    Push Notifications
                </label>
            </section>

            {/* Preferences */}
            <section>
                <h3 className="text-lg font-semibold mb-2">Preferences</h3>
                <label className="block mb-2">
                    Theme:
                    <select
                        value={preferences.theme}
                        onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                        className="border p-2 rounded w-full mt-1"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>
                <label className="block">
                    Language:
                    <select
                        value={preferences.language}
                        onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                        className="border p-2 rounded w-full mt-1"
                    >
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                </label>
            </section>
        </div>
    );
};

export default Settings;
