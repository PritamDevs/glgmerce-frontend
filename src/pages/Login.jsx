import React from 'react'
import loginImage from '../assets/images/login.jpg'
import {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../component/loading'
import { BACKEND_URL } from '../config/index'
import { useNavigate } from 'react-router'



function Login({setIsLogin}) {

    const navigate = useNavigate();

    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [loading,setLoading]=useState(false)

       const handleLogin= async()=>{
           setLoading(true)

            const data={email,password}   
            try {
                let response= await axios.post(`${BACKEND_URL}/seller/login`,data)
                console.log(response.data)
                if(!response.data.success){
                    return toast.error(response.data.message)
                }  
                localStorage.setItem('mytoken',response.data.token)
                localStorage.setItem('_id',response.data.seller._id)
                localStorage.setItem('name',response.data.seller.name)
                localStorage.setItem('email',response.data.seller.email)
                localStorage.setItem('phone',response.data.seller.phone)   
                localStorage.setItem("role", "seller")             

                toast.success(response.data.message)
                setIsLogin(true)
                navigate('/SellerHome')
            } catch (error) {
                return toast.error(error.response.data.message)
            }finally{
                setEmail('')
                setPassword('')
                setLoading(false)
            }
        }

    return (

        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src={loginImage} alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>

            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login as a Seller </h1>
                <div>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label  htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" value=
                        {password} id="password" name="password" onChange={(e)=>setPassword(e.target.value)}className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <button onClick={handleLogin} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </div>

                <div className="mt-6 text-blue-500 text-center">
                    <a href="/register" className="hover:underline">Sign up Here</a>
                </div>
            </div>
            {loading && <Loading/>}
        </div>
    )
}

export default Login