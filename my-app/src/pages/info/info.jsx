import { useStore } from '@/store/store'
import React, { useEffect, useState } from 'react'

export const Info = () => {

    let {data,getProductById} = useStore()

    useEffect(() => {
        getProductById()
    },[])


    const [quantity, setQuantity] = useState(2);

    return (
      <div className="flex p-8 bg-gray-100 min-h-screen">
        <div className="flex flex-col space-y-4">
          {[1, 2, 3, 4].map((_, i) => (
            <img key={i} src="/controller-thumbnail.png" alt="Thumbnail" className="w-24 h-24 object-cover rounded-lg cursor-pointer border" />
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 bg-white p-6 rounded-lg shadow-lg w-full">
          <img src="" alt="Controller" className="w-1/2 object-cover"  />
          <div className="w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">{data.productName}</h2>
            <div className="flex items-center space-x-2 text-yellow-500">
              {Array(5).fill("★").map((star, index) => (
                <span key={index}>{star}</span>
              ))}
              <span className="text-gray-500">({data.quantity})</span>
              <span className="text-green-500 font-semibold">| In Stock</span>
            </div>
            <p className="text-xl font-bold">{data.quantity}</p>
            <p className="text-gray-600">PlayStation 5 Controller Skin with high-quality vinyl and air channel adhesive for easy bubble-free installation.</p>
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Colours:</span>
              <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-black cursor-pointer"></div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Size:</span>
              {["XS", "S", "M", "L", "XL"].map(size => (
                <button key={size} className={`px-3 py-1 border rounded-md ${size === "M" ? "bg-red-500 text-white" : "bg-gray-200"}`}>{size}</button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => setQuantity(quantity - 1)} className="px-3 py-1 border">-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 border">+</button>
            </div>
            <button className="w-full bg-red-500 text-white py-2 rounded-md">Buy Now</button>
            <div className="mt-4 p-4 border rounded-lg bg-gray-50">
              <p className="font-semibold">Free Delivery</p>
              <p className="text-gray-500">Enter your postal code for delivery availability</p>
            </div>
            <div className="mt-2 p-4 border rounded-lg bg-gray-50">
              <p className="font-semibold">Return Delivery</p>
              <p className="text-gray-500">Free 30 Days Delivery Returns. <span className="text-blue-500 cursor-pointer">Details</span></p>
            </div>
          </div>
        </div>
      </div>
    );

}
