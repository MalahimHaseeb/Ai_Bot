"use client"
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { AppContext } from '@/app/context';

const Login = () => {
    const { setLogin } = useContext(AppContext);
    const router = useRouter() ;
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        router.push('/')
        try {
            let url =  `${process.env.NEXT_PUBLIC_DB_BACKEND}/user/login`
            const response = await fetch( url , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            // console.log(data)
            if (data.success) {
               if (typeof window !== 'undefined') {
  localStorage.setItem('auth',JSON.stringify({name : data.name , token : data.token , role : data.role , id : data.id}));
}

                setLogin({
                    user: data.name,
                    token: data.token,
                    role:  data.role,
                    id: data.id
                  });
                router.push('/');
            } else {
                // Handle login error
                alert(data.error);
            }
        } catch (error) {
            // console.error('Login failed:', error);
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 lg:m-0 m-8 rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold text-white mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 font-semibold mb-1">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-700 text-gray-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-300 font-semibold mb-1">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-600 rounded-md px-3 py-2 bg-gray-700 text-gray-200" />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600">Login</button>
                </form>
                {/* Link to Signup Page */}
                <div className="mt-4 text-center">
                    <p className="text-gray-300">Don&apos;t have an account</p>
                    <Link href="/Components/SignUpPage" className="text-yellow-500 hover:text-yellow-600 font-semibold">Sign up here</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
