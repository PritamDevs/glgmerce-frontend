import React, { useState } from "react";
import Loading from "../component/loading";
import {toast} from 'react-toastify';
import axios from 'axios';
import { BACKEND_URL } from "../config/index";
import { useNavigate } from "react-router";
import Product from "./Product";

function Create() {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        brand: "",
        size: "",
    });
  const [loading,setLoading]=useState(false)


  const handleSubmit = async(e)=>{
            setLoading(true)

            try {
                let response= await axios.post(`${BACKEND_URL}/product/create`,formData,{
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':localStorage.getItem('mytoken')
                    }
                })
                if(!response.data.success){
                    return toast.error(response.data.message)
                }
                toast.success(response.data.message)
                navigate('/Product')
            } 
            catch (error) {
                  console.log('Full error:', error);

                return toast.error(error.response.data.message)
            }finally{
                setFormData({
                    name: "",
                    price: "",
                    description: "",
                    category: "",
                    brand: "",
                    size: "",
                })
                setLoading(false)
            }
        }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create Product
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label  htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e)=>setFormData({...formData, name:e.target.value})}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label  htmlFor="price" className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e)=>setFormData({...formData, price:e.target.value})}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter product price"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e)=>setFormData({...formData, description:e.target.value})}
            rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter product description"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
        <label  htmlFor="category" className="block text-gray-700 font-medium mb-2">
        Category
        </label>
        <select
        name="category"
        value={formData.category}
        onChange={(e)=>setFormData({...formData, category:e.target.value})}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        required
        >
       <option value="">-- Select Category --</option>
       <option value="Men">Men</option>
       <option value="Women">Women</option>
       <option value="Kids">Kids</option>
       <option value="Others">Others</option>
      </select>
    </div>


        {/* Brand */}
        <div className="mb-4">
          <label  htmlFor="brand" className="block text-gray-700 font-medium mb-2">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={(e)=>setFormData({...formData, brand:e.target.value})}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter product brand"
            required
          />
        </div>

        {/* Size */}
        <div className="mb-6">
          <label  htmlFor="size" className="block text-gray-700 font-medium mb-2">Size</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={(e)=>setFormData({...formData, size:e.target.value})}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter product size"
            required
          />
        </div>

        {/* Submit */}
        <button
        onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Product
        </button>
      </div>
      {loading && <Loading/>}
    </div>
  );
}

export default Create;
