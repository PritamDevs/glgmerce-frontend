// import React from 'react'
// import {Link,useNavigate} from 'react-router-dom'

// function SellerNavbar({isLogin,setIsLogin}) {

//     let navigate = useNavigate()

//     let handleLogout = ()=>{
//         setIsLogin(false)
//         localStorage.removeItem('mytoken')
//         localStorage.removeItem("_id")
//         localStorage.removeItem("name")
//         localStorage.removeItem("email")
//         localStorage.removeItem("phone")
//         navigate("/SellerHome")
//     }
//     return (
//         <nav className='bg-blue-300 flex items-center justify-between py-5 px-32'>
//             <span className='text-white text-2xl font-bold tracking-wider'>GLGmerce</span>
//           {
//             isLogin && <span className='text-white text-1g font-bold tracking-wider'>
//                 Hello,{localStorage.getItem("name")}(Seller)
//             </span>
//           }
//             <div className='flex items-center gap-7'>
//                 <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/SellerHome">Home</Link>
//                {
//                 isLogin ?(
//                     <>
//                     <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/Product">Products</Link>
//                     <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/Create">Create</Link>
//                     <Link onClick={handleLogout}className='text-red-600 text-xl font-bold hover:text-red-500 transition-all'>Logout</Link>
//                     </>

//                 ):

//                     <> 
//                         <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/login">Login</Link>
//                         <Link className='text-white text-xl font-bold hover:text-blue-500 transition-all' to="/register">Register</Link>
//                     </>   
//                }
//             </div>
//         </nav>
//     )
// }

// export default SellerNavbar

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SellerNavbar({ isLogin, setIsLogin }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLogin(false)
    localStorage.removeItem('mytoken')
    localStorage.removeItem('_id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
    navigate('/login') // redirect to login after logout
  }

  return (
    <nav className='bg-blue-300 flex items-center justify-between py-5 px-32'>
      <span className='text-white text-2xl font-bold tracking-wider'>GLGmerce</span>

      {isLogin && (
        <span className='text-white text-lg font-bold tracking-wider'>
          Hello, {localStorage.getItem('name')} (Seller)
        </span>
      )}

      <div className='flex items-center gap-7'>
        <Link
          className='text-white text-xl font-bold hover:text-blue-500 transition-all'
          to='/SellerHome'
        >
          Home
        </Link>

        {isLogin ? (
          <>
            <Link
              className='text-white text-xl font-bold hover:text-blue-500 transition-all'
              to='/Product'
            >
              Products
            </Link>
            <Link
              className='text-white text-xl font-bold hover:text-blue-500 transition-all'
              to='/Create'
            >
              Create
            </Link>
            <Link
              onClick={handleLogout}
              className='text-red-600 text-xl font-bold hover:text-red-500 transition-all'to='/'
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              className='text-white text-xl font-bold hover:text-blue-500 transition-all'
              to='/login'
            >
              Login
            </Link>
            <Link
              className='text-white text-xl font-bold hover:text-blue-500 transition-all'
              to='/register'
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default SellerNavbar
