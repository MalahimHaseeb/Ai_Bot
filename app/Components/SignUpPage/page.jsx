"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
; // Import useRouter from next/router

const SignUpPage = () => {
    const router = useRouter() // Use useRouter hook inside the component
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        friend: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url =  `${process.env.NEXT_PUBLIC_DB_BACKEND}/user/register`
        try {
            const response = await fetch( url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to sign up');
            }
            setFormData({
                name: '',
                email: '',
                password: '',
                friend: '',
            });
            toast.success('Successfully created user')
            router.push('/Components/Login'); // Use router.push to navigate to login page
        } catch (error) {
            console.error('Error creating user:', error);
            toast.error('Error in creating  user')
            // Handle error here (e.g., display an error message)
        }
    };

    return (
        <>
            <div className="flex -z-50 justify-center items-center h-screen bg-gray-900">
                <div className="bg-gray-800 p-8 lg:m-0 m-8 rounded shadow-md max-w-md w-full">
                    <h2 className="text-2xl font-semibold text-white mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 font-semibold mb-1">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-700 text-gray-200" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 font-semibold mb-1">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-700 text-gray-200" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-300 font-semibold mb-1">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-700 text-gray-200" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="friend" className="block text-gray-300 font-semibold mb-1">Friend</label>
                            <input type="text" id="friend" name="friend" value={formData.friend} onChange={handleChange} className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-700 text-gray-200" />
                        </div>
                        <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600">Sign Up</button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-300">Already have an account?</p>
                        <Link href="/Components/Login" className="text-yellow-500 hover:text-yellow-600 font-semibold">Login here</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;
