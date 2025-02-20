import React from 'react'

export const Wishlist = () => {


    const wishlistProducts = [
        { id: 1, name: "Gucci Duffle Bag", price: 350, image: "/bag.jpg", discount: "15%" },
        { id: 2, name: "RGB Liquid CPU Cooler", price: 120, image: "/cooler.jpg", discount: "10%" },
        { id: 3, name: "GP11 Shooter USB Gamepad", price: 60, image: "/gamepad.jpg", discount: "5%" },
        { id: 4, name: "Quilted Satin Jacket", price: 110, image: "/jacket.jpg", discount: "20%" },
      ];
    
      const recommendedProducts = [
        { id: 5, name: "ASUS FHD Gaming Laptop", price: 950, image: "/laptop.jpg", discount: "30%" },
        { id: 6, name: "IPS LCD Gaming Monitor", price: 270, image: "/monitor.jpg", discount: "25%" },
        { id: 7, name: "HAVIT HV-G92 Gamepad", price: 50, image: "/controller.jpg", tag: "NEW" },
        { id: 8, name: "AK-900 Wired Keyboard", price: 80, image: "/keyboard.jpg", discount: "" },
      ];

  return (
    <div>


<div className="p-6  min-h-screen">
      {/* Wishlist Section */}
      <div className="p-4 rounded-lg  mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Wishlist ({wishlistProducts.length})</h2>
          <button className="text-[black] border-[1px] border-[black] px-3 py-1 rounded">Move All To Bag</button>
        </div>
        <ProductGrid products={wishlistProducts} />
      </div>

      {/* Recommended Section */}
      <div className="p-4 rounded-lg ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Just For You</h2>
          <button className="text-blue-500 border border-blue-500 px-3 py-1 rounded">See All</button>
        </div>
        <ProductGrid products={recommendedProducts} />
      </div>
    </div>


    </div>
  )
}

const ProductGrid = ({ products }) => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-50 p-3 rounded-lg shadow-sm">
            <div className="relative">
             
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            </div>
            <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>
            <p className="text-red-500 font-bold">${product.price}</p>
            <button className="mt-2 w-full bg-black text-white py-1 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };
  
