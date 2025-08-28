// import React, { useState } from 'react'
// import loginImage from '../assets/images/login.jpg'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import Loading from '../component/loading'
// import { BACKEND_URL } from '../config/index'
// import { useNavigate } from 'react-router'

// function BuyerLogin({ setIsLogin }) {

//     let navigate = useNavigate();

//     let [email, setEmail] = useState('')
//     let [password, setPassword] = useState('')
//     let [loading, setLoading] = useState(false)

//     let handleLogin = async () => {
//         setLoading(true)

//         let data = {
//             email: email,
//             password: password,
//         }

//         try {
//             // 🔹 Buyer login API endpoint
//             let response = await axios.post(`${BACKEND_URL}/buyer/login`, data)
//             console.log(response.data)

//             if (!response.data.success) {
//                 return toast.error(response.data.message);
//             }

//             // 🔹 Store buyer info in localStorage
//             localStorage.setItem('mytoken', response.data.token)
//             localStorage.setItem('_id', response.data.buyer._id)
//             localStorage.setItem('name', response.data.buyer.name)
//             localStorage.setItem('email', response.data.buyer.email)
//             localStorage.setItem('phone', response.data.buyer.phone)
//             localStorage.setItem('role', 'buyer')

//             toast.success(response.data.message)
//             localStorage.setItem("role", "buyer");
//             setIsLogin(true)
//             setRole("buyer")
//             navigate('/BuyerHome')

//         } catch (error) {
//             return toast.error(error.response?.data?.message || "Login failed")
//         } finally {
//             setEmail('')
//             setPassword('')
//             setLoading(false)
//         }
//     }
//     return (
//         <div className="bg-gray-100 flex justify-center items-center h-screen">
//             {/* Left Image Section */}
//             <div className="w-1/2 h-screen hidden lg:block">
//                 <img src={loginImage} alt="Login" className="object-cover w-full h-full" />
//             </div>

//             {/* Right Form Section */}
//             <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
//                 <h1 className="text-2xl font-semibold mb-4">Login as a Buyer</h1>
//                 <div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-600">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
//                             autoComplete="off"
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-gray-600">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
//                             autoComplete="off"
//                         />
//                     </div>

//                     <button
//                         onClick={handleLogin}
//                         type="submit"
//                         className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full"
//                     >
//                         Login
//                     </button>
//                 </div>

//                 <div className="mt-6 text-green-600 text-center">
//                     <a href="/register" className="hover:underline">Sign up Here</a>
//                 </div>
//             </div>

//             {loading && <Loading />}
//         </div>
//     )
// }

// export default BuyerLogin


import React, { useState } from 'react'
import loginImage from '../assets/images/login.jpg'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../component/loading'
import { BACKEND_URL } from '../config/index'
import { useNavigate } from 'react-router'

function BuyerLogin({ setIsLogin }) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)

    const data = { email, password }

    try {
      // 🔹 Buyer login API
      const response = await axios.post(`${BACKEND_URL}/buyer/login`, data)
      console.log(response.data)

      if (!response.data.success) {
        return toast.error(response.data.message)
      }

      // 🔹 Store buyer info
      localStorage.setItem('mytoken', response.data.token)
      localStorage.setItem('_id', response.data.buyer._id)
      localStorage.setItem('name', response.data.buyer.name)
      localStorage.setItem('email', response.data.buyer.email)
      localStorage.setItem('phone', response.data.buyer.phone)
      localStorage.setItem('role', 'buyer')
      localStorage.setItem("userId", response.data.buyer._id);

      toast.success(response.data.message)

      setIsLogin(true)
      navigate('/BuyerHome')

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed")
    } finally {
      setEmail('')
      setPassword('')
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left Image Section */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img src={loginImage} alt="Login" className="object-cover w-full h-full" />
      </div>

      {/* Right Form Section */}
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login as a Buyer</h1>
        <div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
              autoComplete="off"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
              autoComplete="off"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div className="mt-6 text-green-600 text-center">
          <a href="/buyerregister" className="hover:underline">Sign up Here</a>
        </div>
      </div>

      {loading && <Loading />}
    </div>
  )
}

export default BuyerLogin
