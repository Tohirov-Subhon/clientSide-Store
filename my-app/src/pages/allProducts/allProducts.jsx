import React, { useState } from 'react'




export const AllProducts = () => {


    const products = [
        { id: 1, name: "ASUS Gaming Laptop", price: 1000, image: "/laptop.jpg", tag: "NEW" },
        { id: 2, name: "Canon DSLR Camera", price: 1200, image: "/camera.jpg", tag: "SALE" },
        { id: 3, name: "IPS Gaming Monitor", price: 300, image: "/monitor.jpg", tag: "HOT" },
        { id: 4, name: "Gaming Controller", price: 60, image: "/controller.jpg", tag: "NEW" },
        { id: 5, name: "RGB Keyboard", price: 120, image: "/keyboard.jpg", tag: "" },
      ];

      const [selectedCategory, setSelectedCategory] = useState("All");



  return (
    <div className='p-[40px_40px] flex justify-between'>
        
        <div className="flex ">
      {/* Sidebar */}
      <aside className="w-1/4 p-5 bg-white shadow-md">
        <h2 className="font-bold text-lg mb-4">Categories</h2>
        <ul className="space-y-2">
          {["All", "Electronics", "Gaming", "Fashion"].map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-2 rounded ${
                selectedCategory === category ? "text-[red]" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-[70px] p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          {/* <button className="bg-red-500 text-white px-4 py-2 rounded">More Products</button> */}
          <select className='w-[200px] h-[35px] border-[1.5px] rounded-[5px] cursor-pointer ' >
             <option>Populary</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="flex gap-[20px] flex-wrap mb-[30px]">
          {products.map((product) => (
            <div key={product.id} className="w-[250px] bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-3 rounded" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-red-500 font-bold">${product.price}</p>
              {/* {product.tag && <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded">{product.tag}</span>} */}
              {/* <button className="mt-3 block w-full bg-blue-500 text-white py-2 rounded">Add to Cart</button> */}
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  )
}
