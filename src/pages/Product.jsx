import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { BACKEND_URL } from '../config/index'
import Loading from '../component/loading'

function Product() {
  let[products,setProducts]=useState('')
    let [loading,setLoading]=useState(false)

    let fetchAllProducts = async()=>{
      setLoading(true)
      try {
        let response= await axios.get(`${BACKEND_URL}/product/all`,{
          headers:{
            Authorization: localStorage.getItem('mytoken')
          }
        })
       
        console.log(response.data)
        if(!response.data.success){
        return toast.error(response.data.message)
        }  
        setProducts(response.data.products)

        toast.success(response.data.message)
      } catch (error) {
        return toast.error(error.response.data.message)
      }finally{
        setLoading(false)
      }
    }
    useEffect(()=>{
    fetchAllProducts();
    },[])
  return (
    <div className="p-6">
  {loading && <Loading />}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products && products.map((item, index) => (
      <div 
        key={index} 
        className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition"
      >
        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
        <p className="text-gray-600 mt-2">{item.description}</p>

        <div className="mt-3 space-y-1">
          <p className="text-sm text-gray-500"><span className="font-medium">Category:</span> {item.category}</p>
          <p className="text-sm text-gray-500"><span className="font-medium">Brand:</span> {item.brand}</p>
          <p className="text-sm text-gray-500"><span className="font-medium">Size:</span> {item.size}</p>
        </div>

        <p className="mt-4 text-lg font-bold text-indigo-600">₹ {item.price}</p>
      </div>
    ))}
  </div>
</div>

  )
}
export default Product


