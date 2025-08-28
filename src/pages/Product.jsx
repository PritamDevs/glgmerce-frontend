import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { BACKEND_URL } from '../config/index'
import Loading from '../component/loading'

function Product() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const role = localStorage.getItem("role") 

  const fetchAllProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${BACKEND_URL}/product/all`, {
        headers: {
          Authorization: localStorage.getItem('mytoken')
        }
      })

      if (!response.data.success) {
        return toast.error(response.data.message)
      }

      setProducts(response.data.products)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch products")
    } finally {
      setLoading(false)
    }
  }
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await axios.delete(`${BACKEND_URL}/product/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('mytoken')}`
        }
      })

      if (!response.data.success) {
        return toast.error(response.data.message)
      }

      setProducts(products.filter(item => item._id !== id))

      toast.success(response.data.message)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete")
    }
  }
const addToCart = async (productId) => {
  try {
    const token = localStorage.getItem("mytoken");
    let response = await axios.post(
      `${BACKEND_URL}/cart/add`,
      { productId, quantity: 1 },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response?.data?.message || "Error adding to cart");
  }
};


  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div className="p-6">
      {loading && <Loading />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((item) => (
            <div 
              key={item._id} 
              className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>

              <div className="mt-3 space-y-1">
                <p className="text-sm text-gray-500"><span className="font-medium">Category:</span> {item.category}</p>
                <p className="text-sm text-gray-500"><span className="font-medium">Brand:</span> {item.brand}</p>
                <p className="text-sm text-gray-500"><span className="font-medium">Size:</span> {item.size}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
              <p className="mt-4 text-lg font-bold text-indigo-600 inline-block ">₹ {item.price}</p>

              {role === "buyer" && (
              <button onClick={() => addToCart(item._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
               Add to Cart
              </button>
              )}
              </div>

              {role === "seller" && localStorage.getItem("userId")===item.sellerId && (
                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600 transition"
                >
                  Delete
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No products available</p>
        )}
      </div>
    </div>
  )
}
export default Product
