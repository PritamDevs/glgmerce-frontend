import React, { useState } from 'react'
import loginImage from '../assets/images/login.jpg'
import { toast } from 'react-toastify'
import axios from 'axios'
import Loading from '../component/loading'
import { BACKEND_URL } from "../config/index";

function BuyerRegister() {
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cpassword, setCpassword] = useState('')
    let [loading, setLoading] = useState(false)

    let handleRegister = async () => {
        setLoading(true)

        let data = {
            name,
            phone,
            email,
            password,
            cpassword
        }

        try {
            // 🔹 Buyer register API
            let response = await axios.post(`${BACKEND_URL}/buyer/register`, data)
            console.log(response.data)

            if (!response.data.success) {
                return toast.error(response.data.message)
            }

            toast.success(response.data.message)
        } catch (error) {
            console.log('Full error:', error)
            return toast.error(error.response?.data?.message || "Registration failed")
        } finally {
            setName('')
            setPhone('')
            setEmail('')
            setPassword('')
            setCpassword('')
            setLoading(false)
        }
    }

    return (
        <div className="bg-gray-100 flex flex-row-reverse justify-center items-center h-screen">
            {/* Left Image */}
            <div className="w-1/2 h-screen hidden lg:block">
                <img src={loginImage} alt="Register" className="object-cover w-full h-full" />
            </div>

            {/* Right Form */}
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Register as New Buyer</h1>
                <div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Name</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600">Phone</label>
                        <input type="phone" id="phone" onChange={(e) => setPhone(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cpassword" className="block text-gray-600">Confirm Password</label>
                        <input type="password" id="cpassword" onChange={(e) => setCpassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500" autoComplete="off" />
                    </div>

                    <button type="submit" onClick={handleRegister}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full">
                        Register
                    </button>
                </div>

                <div className="mt-6 text-green-600 text-center">
                    <a href="/login" className="hover:underline">Sign in Here</a>
                </div>
            </div>

            {loading && <Loading />}
        </div>
    )
}

export default BuyerRegister
