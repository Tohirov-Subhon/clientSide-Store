import { api } from '@/config/config'
import { useStore } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Info = () => {

  let {id} = useParams()

    let {data,getProductById,addToCart} = useStore()

    useEffect(() => {
        getProductById(id)
        addToCart()
    },[id])


    const [selctImage,setSelectImage] = useState(
      data.images ? data.images[0]?.images : ''
    )


    const [quantity, setQuantity] = useState(1);

    console.log(data)


    return (
      <>

      <div className='flex p-[5px_60px]  '>
      <Link to='/'>    <p className='text-[gray] mr-[10px]'>Home /</p></Link>
      <Link ><p className='text-[black]'>{data.productName}</p></Link>
      </div>

      <div className="flex p-[40px_40px] sm:flex-wrap sm:p-8 min-h-screen items-center sm:items-start">
      {/* Галерея изображений */}
      <div className="sm:flex mr-[50px] sm:gap-[10px] sm:flex-wrap   pb-2">
        {data?.images?.map((el) => (
          <div key={el.id} className='w-[150px] h-[150px] sm:w-[80px] sm:h-[80px]  flex items-center justify-center bg-[#F5F5F5] mb-[40px] rounded-lg cursor-pointer border-2 border-transparent hover:border-red-500 transition-all duration-300'>
            <img
            src={`${api}/images/${el.images}`}
            alt="Thumbnail"
            onClick={() => setSelectImage(el.images)}
            className="w-[100px] h-[100px] sm:w-[80px] sm:h-[80px]  object-cover   "
          />
          </div>
        ))}
      </div>

      <div className=' flex w-[950px] h-[450px] mr-[50px]  bg-[#F5F5F5] '>
           <img
            src={`${api}/images/${selctImage}`}
            alt="Product"
            className="w-[250px] h-[200px] sm:w-[auto] m-auto items-center  transition-transform duration-300 hover:scale-105"
          />

      </div>

      {/* Основная карточка товара */}
      <div className="sm:p-[50px_0px] w-full max-w-4xl p-3   rounded-l">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          {/* Изображение товара */}
       
          {/* Информация о товаре */}
          <div className="w-full  space-y-4 sm:space-y-6  sm:text-left">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold sm:mb-[30px]">{data.productName}</h2>

            {/* Рейтинг */}
            <div className="flex  sm:justify-start items-center space-x-2 text-yellow-500 text-base sm:text-lg">
              {Array(5).fill("★").map((star, index) => (
                <span key={index}>{star}</span>
              ))}
              <span className="text-gray-500 text-xs sm:text-base">({data.quantity})</span>
              <span className="text-green-600 font-semibold text-xs sm:text-base">| In Stock</span>
            </div>

            {/* Цена */}
            <p className="text-base sm:text-2xl font-bold text-red-500">${data.price}</p>
            <p className="text-gray-600 text-xs sm:text-base">{data.description}</p>

            {/* Цвета */}
            <div className="flex  sm:justify-start items-center space-x-3 sm:space-x-4 ">
              <span className="font-semibold text-xs sm:text-base">Colors:</span> 
                <div style={{backgroundColor:`${data.color}`}} className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full cursor-pointer`}></div>
            </div>

            {/* Размеры */}
            <div className="flex  sm:justify-start items-center space-x-2  ">
              <span className="font-semibold text-xs sm:text-base sm:mt-[30px]">Size:</span>
             
                <button
                  key={data.size}
                  className={`px-2 py-1 sm:px-4 sm:mt-[30px] sm:py-1.5 rounded-md font-semibold transition-all  bg-red-500 text-white  hover:bg-gray-300`}
                >
                  {data.size}
                </button>
            </div>

            <div className='flex gap-[20px] sm:flex-wrap   '>
              {/* Количество */}
            <div className="flex  sm:justify-start  items-center sm:mb-[30px] sm:mt-[30px] ">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-[50px] px-2 py-1 sm:px-4 sm:py-2 border rounded-l-md bg-gray-200 hover:bg-gray-300 transition-all"
              >
                -
              </button>
              <span className="border-[1.5px] w-[50px] h-[33px] sm:h-[40px] text-center text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-[50px]  px-2 py-1 sm:px-4 sm:py-2 border rounded-r-md text-white bg-red-500 hover:bg-gray-300 transition-all"
              >
                +
              </button>
            </div>

            {/* Кнопка покупки */}
            <Link to='/cart'><button onClick={() => addToCart(data.id)} className="w-[150px] sm:w-[300px] h-[35px] sm:h-[50px] bg-red-500 text-white  sm:py-3 rounded-[5px] font-semibold text-lg  hover:bg-red-600 transition-all">
              Buy Now
            </button></Link>
            </div>

            {/* Информация о доставке и возврате */}
              <div className="w-[300px] mt-2 sm:mt-4 p-2 sm:p-4 border rounded-lg bg-gray-50 text-left pl-[20px]  sm:text-left">
              <p className="font-semibold mb-[5px]">🚚 Free Delivery</p>
              <p className="text-gray-500 text-xs sm:text-base mb-[5px]">Enter your postal code for delivery availability</p>
            </div>

            <div className="w-[300px] text-left mt-2 p-2 sm:p-4 border rounded-lg bg-gray-50  sm:text-left">
              <p className="font-semibold mb-[5px]" >🔄 Return Policy</p>
              <p className="text-gray-500 text-xs sm:text-base mb-[5px]">
                Free 30 Days Delivery Returns.{' '}
                <span className="text-blue-500 cursor-pointer hover:underline">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
    );

}
