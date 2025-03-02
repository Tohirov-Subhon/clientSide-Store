import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/store';
import { Card1 } from '@/components/Cards/card1';




export const AllProducts = () => {



  let {data,getCategory,getProducts} = useStore()

  useEffect(() =>{
    getCategory()
    getProducts()

  },[])


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
          {data.map((el) => (
            <li
              key={el.id}
              className={`cursor-pointer p-2 rounded ${
                selectedCategory === el.categoryName ? "text-[red]" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(el.categoryName)}
            >
              {el.categoryName}
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



        
                <div className='flex justify-between flex-wrap sm:ml-[50px]'>
        
                    {
                     data.length>0&&data?.map((el) => (
        
                        <Card1 id={el.id} productInMyCart={el.productInMyCart} img={el.image} name={el.productName} price={el.price}  count={el.quantity} className='gap-[10px]' />
                      ))
                    }
        
                    {/* {console.log(data)} */}
        
        
                  </div>

        
      </main>
    </div>
    </div>
  )
}
