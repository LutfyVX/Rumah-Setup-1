import React from 'react';
import { useState } from 'react';
import Navbar  from './Navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { username, password });
        // Add your authentication logic here
    };

    return (
        <div className="font-sans">

            {/* Navigation */}
            <nav className="">
           <Navbar/>
            </nav>

            {/* Keyboard Image Banner */}
            <div
                className="w-full h-20 md:h-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/api/placeholder/900/300')" }}
            ></div>

            {/* Login Form Section */}
            <div className="max-w-md mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-center mb-8">Log In</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm mb-2">Username/Email/Number Phone</label>
                        <input
                            type="text"
                            placeholder="type here..."
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm">Password</label>
                            <a href="#" className="text-red-500 text-sm">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            placeholder="type here..."
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex justify-end mb-8">
                    <button
                        type="submit"
                        className="bg-white shadow-md px-6 py-2 rounded flex items-center justify-between w-50 hover:bg-gray-50 transition-colors hover:scale-95"
                    >
                        <span className="font-bold">Enter</span>
                        <Icon icon="uil:enter" width={24} height={30} />
                    </button>
                    </div>

                    <div className="text-center mb-6">
                        <p className="text-sm text-gray-500">Or resume with</p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <button
                            type="button"
                            className="bg-white border shadow-md px-6 py-2 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <img
                                src="/api/placeholder/20/20"
                                alt="Google"
                                className="w-5 h-5"
                            />
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-500">
                            Don't have an account/register?{" "}
                            <a href="#" className="text-black font-medium hover:underline">Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;