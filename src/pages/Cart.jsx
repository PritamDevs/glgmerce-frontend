// import React from 'react'

// function Cart() {
//   return (
//     <div>
//       Cart
//     </div>
//   )
// }

// export default Cart
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import Loading from '../component/loading'

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const token = localStorage.getItem("mytoken"); // buyer JWT token

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      let cartData = response.data.cart;
      if (!cartData) cartData = { products: [] };
      console.log("Raw cart data:", response.data);
      const items = cartData.products.map((p) => ({
        id: p.productId._id,
        name: p.productId.name,
        price: p.productId.price,
        qty: p.quantity,
      }));
      cartData.products.forEach((p, i) => {
      console.log(`Product ${i}:`, p);
      })

      console.log("Mapped cart items:", items);
      setCartItems(items);
    } catch (error) {
      console.error("Fetch cart error:", error.response || error);
      toast.error("Failed to fetch cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQty = async (id, qty) => {
    if (qty < 1) return;
    try {
      setUpdating(true);
     const response= await axios.put(
        `/api/cart/${id}`,
        { quantity: qty },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Update quantity response:", response.data);
      fetchCart(); // refresh cart
    } catch (err) {
      toast.error("Failed to update quantity");
    } finally {
      setUpdating(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response =await axios.delete(`/api/cart/remove/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Delete item response:", response.data);
      fetchCart(); // refresh cart
      toast.success("Item removed from cart");
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + shipping;

  if (loading) return <p className="text-center py-10">Loading cart...</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-xl shadow p-4">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-l-lg disabled:opacity-50"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      disabled={updating}
                    >-</button>
                    <span className="px-4 bg-white border">{item.qty}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-r-lg disabled:opacity-50"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      disabled={updating}
                    >+</button>
                  </div>
                  <button
                    className="ml-4 text-red-500 hover:text-red-700"
                    onClick={() => deleteItem(item.id)}
                    disabled={updating}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">Order Summary</h2>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-bold text-gray-800 text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      {loading && <Loading />}
    </div>
  );
}

export default Cart;

