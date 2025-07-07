import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = formData;

        // Replace these credentials with your own logic
        if (username === "Mskelum" && password === "Mskelum@1319") {
            navigate("/admin");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="max-w-xl mx-4 sm:mx-auto p-3 sm:p-4 my-5 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Login</h2>

            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-800 rounded text-center">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="username" className="block text-gray-700 mb-1 font-medium">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter username"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 mb-1 font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter password"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-48 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2.5 rounded transition"
                    >
                        Login
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Login;
