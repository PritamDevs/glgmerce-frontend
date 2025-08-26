import React,{useState} from 'react'
import loginImage from '../assets/images/login.jpg'
import {toast} from 'react-toastify'
import axios from 'axios'
import Loading from '../component/loading'
import { BACKEND_URL } from "../config/index";

function Register() {
        let[name,setName]=useState('')
        let[phone,setPhone]=useState('')
        let[email,setEmail]=useState('')
        let[password,setPassword]=useState('')
        let[cpassword,setCpassword]=useState('')
        let[address,setAddress]=useState('')

        let [loading, setLoading] = useState(false)


        let handleRegister= async()=>{
            setLoading(true)

            let data={
                name:name,
                phone:phone,
                email:email,
                password:password,
                cpassword:cpassword,
                address:address
            }
            try {
                let response= await axios.post(`${BACKEND_URL}/seller/register`,data)
                console.log(response.data)
                console.log(response.data)
                if(!response.data.success){
                    return toast.error(response.data.message)
                }
                toast.success(response.data.message)
            } 
            catch (error) {
                  console.log('Full error:', error);

                return toast.error(error.response.data.message)
            }finally{
                setName('')
                setPhone('')
                setEmail('')
                setPassword('')
                setCpassword('')
                setAddress('')
                setLoading(false)
            }
        }
           
    return (
  
        <div className="bg-gray-100 flex flex-row-reverse justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src={loginImage} alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Register as New Seller</h1>
                <div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Name</label>
                        <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600">Phone</label>
                        <input type="phone" id="phone" name="phone"onChange={(e)=>setPhone(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cpassword" className="block text-gray-600">Cpassword</label>
                        <input type="password" id="cpassword" name="cpassword" onChange={(e)=>setCpassword(e.target.value)}className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-600">Address</label>
                        <textarea id="address" name="address" onChange={(e)=>setAddress(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"></textarea>
                    </div>

                    <button type="submit" onClick={handleRegister} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>
                </div>

                <div className="mt-6 text-blue-500 text-center">
                    <a href="/login" className="hover:underline">Sign in Here</a>
                </div>
            </div>
            {loading && <Loading/>}

        </div>
    )
}

export default Register
