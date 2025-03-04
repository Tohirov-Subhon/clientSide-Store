import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/store'
import { Button2 } from '@/components/Button/button2'
import { ButtonRed } from '@/components/Button/buttonRed'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '@/config/config'

export const Checkout = () => {



    let {cart,getCart,total} = useStore()
    
    
    useEffect(() => {
        getCart()
    },[])

    const [first,setFirst] = useState(true)
    const [buy,setBuy] = useState(false)


    let navigate = useNavigate()
   

   return (      
    <div >


{buy && 
    <div className="flex flex-col items-center justify-center min-h-screen sm:w-[350px] m-auto sm:mt-[-100px] text-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-2xl font-bold text-green-600">Your purchase is complete!</h1>
        <p className="text-gray-700 mt-4">Thank you for your order. Please wait while we process your delivery.</p>
        <div className="mt-6">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
}

       {first && 
       
       <div>

    <div className='flex p-[5px_60px] mb-[20px] '>
        <Link to='/'>    <p className='text-[gray] mr-[10px]'>Home /</p></Link>
        <Link to='/cart'><p className='text-[gray] mr-[10px]'>View Cart /</p></Link>
        <Link to='/cart'><p className='text-[black]'>CheckOut</p></Link>
       </div>
        
        <div className='p-[40px_40px] flex justify-between sm:flex-wrap '>

            <div >

                <div className='w-[300px] h-[480px] text-center bg-[white] shadow-lg pt-[20px] '>
                    <input className='w-[250px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto pl-[10px] ' placeholder='First Name' type="text" />
                    <input className='w-[250px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto pl-[10px] ' placeholder='Last Name' type="text" />
                    <input className='w-[250px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto pl-[10px] ' placeholder='Street address' type="text" />
                    <input className='w-[250px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto pl-[10px] ' placeholder='Apartment, floor, etc. (optional)' type="text" />
                    <input className='w-[250px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto pl-[10px] ' placeholder='Town/City' type="text" />
                    <input className='w-[250px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto pl-[10px] ' placeholder='Phone number' type="text" />
                    <input className='w-[250px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto pl-[10px] ' placeholder='Email address' type="text" />

                    <div className='flex m-auto gap-[10px] ml-[27px] sm:hidden '>
                        <input type="checkbox" name="" id="" />
                        <p>Save this information for faster check-out </p>
                    </div>
                </div>

           
            </div>

            <div className='sm:w-[300px] sm:mt-[70px]  pt-[20px]'>

                <div>
                    {
                        cart?.map((el) => (
                            <div key={el.id} className='w-[400px] h-[70px]   rounded-[5px] mb-[20px] flex justify-between'>
                                <div className='flex gap-[10px]'>
                                <img className='w-[50px] h-[50px]' src={`${api}/images/${el.image}`} alt="" />
                                <p className='pt-[10px]'>{el.product.productName}</p>
                                </div>
                                <p className='pt-[10px]'>${el.product.price}</p>
                            </div>

                        ))
                    }
                </div>

                <div className='flex justify-between mb-[20px]'>
                    <p>Subtotal:</p>
                    <p>${total}</p>
                </div>

                <div className='flex justify-between mb-[20px]'>
                <p>Shipping:</p>
                <p>Free</p>
                </div>

                <hr />
                
                <div className='flex justify-between mb-[20px] mt-[20px]'>
                <p className='font-[600]'>Total</p>
                <p className='font-[600]'>${total}</p>
                </div>

                <div className='flex justify-between mb-[20px] mt-[20px]'>
                  <div className='flex gap-[10px]'>
                  <input type="radio" />
                  <p>Bank</p>
                  </div>
                </div>

                <div className='flex justify-between mb-[20px] mt-[20px]'>
                  <div className='flex gap-[10px]'>
                  <input type="radio"  />
                  <p>Cash on delivery</p>
                  </div>
                </div>


                <div className='w-[350px] sm:w-[300px] h-[70px] flex gap-[15px] text-center shadow-lg pt-[20px] pl-[15px]  '>
                    <input type="text" placeholder='Coupon Code' className='w-[170px] sm:w-[140px] h-[40px] pl-[10px]  rounded-[5px] border-[1.5px]' />
                    <Button2 wi='140px' he='40px' color='#DB4444' title='Apply' text='#DB4444' />
                </div>
                

                <div className='' onClick={() => {setBuy(true),setFirst(false)}}><ButtonRed wi='180px' he='40px' name='Place Order' mt='40px' /></div>


            </div>

            

        </div>

       </div>

       }

    </div>
   )
}
