import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({ isLogin, setIsLogin }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLogin(false)
    localStorage.removeItem('mytoken')
    localStorage.removeItem('_id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
    localStorage.removeItem('role')
    navigate("/") // redirect to homepage after logout
  }

  return (
    <nav className="bg-blue-300 flex items-center justify-between py-5 px-32 shadow-md">
      {/* Logo */}
      <span 
        onClick={() => navigate("/")} 
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
          to="/"
        >
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
