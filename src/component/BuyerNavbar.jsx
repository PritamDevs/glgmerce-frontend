
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// function BuyerNavbar({ isLogin, setIsLogin }) {
//   let navigate = useNavigate()

//   let handleLogout = () => {
//     setIsLogin(false)
//     localStorage.removeItem('mytoken')
//     localStorage.removeItem('_id')
//     localStorage.removeItem('name')
//     localStorage.removeItem('email')
//     localStorage.removeItem('phone')
//     localStorage.removeItem('role')
//     navigate("/") // redirect to homepage after logout
//   }

//   return (
//     <nav className="bg-blue-300 flex items-center justify-between py-5 px-32 shadow-md">
//       {/* Logo */}
//       <span 
//         onClick={() => navigate("/BuyerHome")} 
//         className="text-white text-2xl font-bold tracking-wider cursor-pointer"
//       >
//         GLGmerce
//       </span>

//       {/* Greeting */}
//       {isLogin && (
//         <span className="text-white text-lg font-bold tracking-wider">
//           Hello, {localStorage.getItem("name")} (Buyer)
//         </span>
//       )}

//       {/* Links */}
//       <div className="flex items-center gap-7">
//         <Link 
//           className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
//           to="/BuyerHome"
//         >
//           Home
//         </Link>

//         {isLogin ? (
//           <>
//             <Link 
//               className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
//               to="/Product"
//             >
//             Products
//             </Link>
//             <Link 
//               className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
//               to="/Orders"
//             >
//             Orders  
//             </Link>
//             <button 
//               onClick={handleLogout} 
//               className="text-red-600 text-xl font-bold hover:text-red-500 transition-all"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link 
//               className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
//               to="/login"
//             >
//               Login
//             </Link>
//             <Link 
//               className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
//               to="/register"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default BuyerNavbar


import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BuyerNavbar({ isLogin, setIsLogin }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLogin(false)
    localStorage.clear()
    navigate("/") // redirect to homepage after logout
  }

  return (
    <nav className="bg-blue-300 flex items-center justify-between py-5 px-32 shadow-md">
      {/* Logo */}
      <span 
        onClick={() => navigate("/BuyerHome")} 
        className="text-white text-2xl font-bold tracking-wider cursor-pointer"
      >
        GLGmerce
      </span>

      {/* Greeting */}
      {isLogin && (
        <span className="text-white text-lg font-bold tracking-wider">
          Hello, {localStorage.getItem("name")} ({localStorage.getItem("role")})
        </span>
      )}

      {/* Links */}
      <div className="flex items-center gap-7">
        <Link 
          className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
          to="/BuyerHome"
        >
          Home
        </Link>

        {isLogin ? (
          <>
            <Link 
              className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
              to="/Product"
            >
              Products
            </Link>
            <Link 
              className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
              to="/Orders"
            >
              Orders  
            </Link>
            <Link 
              className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
              to="/Cart"
            >
              Cart
            </Link>
            <button 
              onClick={handleLogout} 
              className="text-red-600 text-xl font-bold hover:text-red-500 transition-all" to='/'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
              to="/login"
            >
              Login
            </Link>
            <Link 
              className="text-white text-xl font-bold hover:text-blue-500 transition-all" 
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default BuyerNavbar


