import { Card1 } from '@/components/Cards/card1';
import { useStore } from '@/store/store';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


export const Wishlist = () => {


     let { data , getProducts, getCategory } = useStore()
    
      useEffect(() => {
        getProducts()
        getCategory()
    
      }, [])

  return (
    <div>

      <div className='flex p-[5px_60px]  '>
      <Link to='/'>    <p className='text-[gray] mr-[10px]'>Home /</p></Link>
      <Link to='/wishlist'><p className='text-[black]'>Wishlist</p></Link>
      </div>



     <div className='flex justify-between flex-wrap p-[40px_50px] sm:p-[105px_40px] sm:ml-[50px]'>
    
      {
       data.length>0&&data?.map((el) => (
    
          <Card1 id={el.id} productInMyCart={el.productInMyCart} img={el.image} name={el.productName} price={el.price}  count={el.quantity} className='gap-[10px]' />
        ))
      }
    
      {/* {console.log(data)} */}
    
    
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
  
