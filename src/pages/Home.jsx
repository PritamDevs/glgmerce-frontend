// import React from "react";
// import { ShoppingCart, Search, User } from "lucide-react";

// function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
//         <h1 className="text-2xl font-bold text-blue-600">ShopEase</h1>
//         <div className="flex items-center gap-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="border rounded-lg px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <Search className="text-gray-500" />
//           <ShoppingCart className="text-gray-700 cursor-pointer" />
//           <User className="text-gray-700 cursor-pointer" />
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative bg-blue-100 py-20 text-center">
//         <h2 className="text-4xl font-bold text-gray-800">Discover the Best Deals</h2>
//         <p className="mt-3 text-gray-600">Shop the latest trends at unbeatable prices</p>
//         <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           Shop Now
//         </button>
//       </section>

//       {/* Categories */}
//       <section className="px-8 py-12">
//         <h3 className="text-2xl font-semibold mb-6">Shop by Category</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {["Clothing", "Electronics", "Shoes", "Home Decor"].map((cat) => (
//             <div
//               key={cat}
//               className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition"
//             >
//               <p className="text-lg font-medium">{cat}</p>
//             </div>
//           ))}
//         </div>
//       </section>

      
//     </div>
//   );
// }

// export default Home;



import React from "react";
import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      </nav>

      {/* Hero Section */}
      <section className="relative bg-blue-100 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to GLGmerce 
        </h2>
        <p className="mt-3 text-gray-600">
          Connecting Buyers & Sellers for the Best Deals 
        </p>
        <div className="mt-6 flex justify-center gap-6">
        </div>
      </section>

      {/* Buyer & Seller Access */}
      <section className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Buyer Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
          <ShoppingCart className="mx-auto text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-3">For Buyers</h3>
          <p className="text-gray-600 mb-6">
            Explore a wide variety of products at the best prices. Easy shopping, fast delivery.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/buyerlogin"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              to="/buyerregister"
              className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Seller Card */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
          <User className="mx-auto text-green-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-3">For Sellers</h3>
          <p className="text-gray-600 mb-6">
            Showcase your products to thousands of buyers. Manage sales with ease.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
