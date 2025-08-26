// import React, { useEffect, useState } from 'react'
// import Login from './pages/Login'
// import BuyerLogin from './pages/BuyerLogin'
// import Register from './pages/Register'
// import BuyerRegister from './pages/BuyerRegister'
// import { Route, Routes } from 'react-router'
// import Home from './pages/Home'
// import Navbar from './component/Navbar'
// import Footer from './component/Footer'
// import NotFound from './pages/NotFound'
// import Product from './pages/Product'
// import Create from './pages/Create'
// import BuyerHome from './pages/BuyerHome'
// import SellerHome from './pages/SellerHome'

// function App() {

//  let [isLogin,setIsLogin]=useState(false)
//  let [role, setRole] = useState(null) 
//  useEffect(() => {
//   if(localStorage.getItem('mytoken')){
//     setIsLogin(true)
//     setRole(localStorage.getItem('role'))
//   }
//  }, [])
 

//   return (
//     <>
//       <Navbar isLogin={isLogin} setIsLogin={setIsLogin} role={role}/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Seller Auth */}
//         <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
//         <Route path="/register" element={<Register />} />

//         {/* Buyer Auth */}
//         <Route path="/buyerlogin" element={<BuyerLogin setIsLogin={setIsLogin} />} />
//         <Route path="/buyerregister" element={<BuyerRegister />} />

//          {/* Seller Pages */}
//          <Route path="/create" element={<Create />} />
//          <Route path="/product" element={<Product />} />


//          {/* Home Pages */}
//           <Route path="/buyerhome" element={<BuyerHome />} />
//           <Route path="/sellerhome" element={<SellerHome />} />

//         <Route path="/*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }
// export default App

import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import BuyerLogin from './pages/BuyerLogin'
import Register from './pages/Register'
import BuyerRegister from './pages/BuyerRegister'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import BuyerNavbar from './component/BuyerNavbar'
import SellerNavbar from './component/SellerNavbar'
import Footer from './component/Footer'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Create from './pages/Create'
import BuyerHome from './pages/BuyerHome'
import SellerHome from './pages/SellerHome'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Shop from './pages/Shop'


function App() {
  let [isLogin, setIsLogin] = useState(false)
  let [role, setRole] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('mytoken')) {
      setIsLogin(true)
      setRole(localStorage.getItem('role'))
    }
  }, [])

  return (
    <>
      {
        role === "buyer" ? (
          <BuyerNavbar isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : role === "seller" ? (
          <SellerNavbar isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        )
      }

      <Routes>
        <Route path="/" element={<Home />} />

        {/* SetRole */}
        <Route path="/login" element={<Login setIsLogin={setIsLogin} setRole={setRole} />} />
        <Route path="/buyerlogin" element={<BuyerLogin setIsLogin={setIsLogin} setRole={setRole} />} />


        {/* Seller Auth */}
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/register" element={<Register  />} />

        {/* Buyer Auth */}
        <Route path="/buyerlogin" element={<BuyerLogin setIsLogin={setIsLogin} />} />
        <Route path="/buyerregister" element={<BuyerRegister />} />

        {/* Seller Pages */}
        <Route path="/create" element={<Create />} />
        <Route path="/product" element={<Product />} />

        {/* Buyer Pages */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />


        {/* Home Pages */}
        <Route path="/BuyerHome" element={<BuyerHome />} />
        <Route path="/SellerHome" element={<SellerHome />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App


