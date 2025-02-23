import React, { useEffect } from 'react'
import { useStore } from '@/store/store'
import { Button2 } from '@/components/Button/button2'
import { ButtonRed } from '@/components/Button/buttonRed'

export const Checkout = () => {



    let {data,getCart} = useStore()
    
    
    useEffect(() => {
        getCart()
    },[])



   return (      
    <div >
        
        <div className='p-[40px_40px] flex justify-between'>

            <div >

                <div className='w-[400px] h-[480px] text-center bg-[white] shadow-lg pt-[20px] '>
                    <input className='w-[350px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto ' placeholder='' type="text" />
                    <input className='w-[350px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto ' placeholder='' type="text" />
                    <input className='w-[350px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto ' placeholder='' type="text" />
                    <input className='w-[350px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto ' placeholder='' type="text" />
                    <input className='w-[350px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto ' placeholder='' type="text" />
                    <input className='w-[350px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto ' placeholder='' type="text" />
                    <input className='w-[350px] h-[40px] border-[1.5px] rounded-[5px] block mb-[20px] m-auto ' placeholder='' type="text" />

                    <div className='flex m-auto gap-[10px] ml-[27px]'>
                        <input type="checkbox" name="" id="" />
                        <p>Save this information for faster check-out </p>
                    </div>
                </div>

           
            </div>

            <div className='pt-[20px]'>

                <div>
                    {
                        data.map((el) => (
                            <div key={el.id} className='w-[400px] h-[70px]   rounded-[5px] mb-[20px] flex justify-between'>
                                <div className='flex gap-[10px]'>
                                <img className='w-[50px] h-[50px]' src={"https://store-api.softclub.tj/images/" + el.product.image} alt="" />
                                <p className='pt-[10px]'>{el.product.productName}</p>
                                </div>
                                <p className='pt-[10px]'>${el.product.price}</p>
                            </div>

                        ))
                    }
                </div>

                <div className='flex justify-between mb-[20px]'>
                    <p>Subtotal:</p>
                    <p></p>
                </div>

                <div className='flex justify-between mb-[20px]'>
                <p>Shipping:</p>
                <p>Free</p>
                </div>

                <hr />
                
                <div className='flex justify-between mb-[20px] mt-[20px]'>
                <p className='font-[600]'>Total:</p>
                <p className='font-[600]'>$1700</p>
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


                <div className='w-[350px] h-[70px] flex gap-[15px] text-center shadow-lg pt-[20px] pl-[15px] '>
                    <input type="text" placeholder='Coupon Code' className='w-[170px] h-[40px] pl-[10px]  rounded-[5px] border-[1.5px]' />
                    <Button2 wi='140px' he='40px' color='#DB4444' title='Apply' text='#DB4444' />
                </div>
                

                <ButtonRed wi='180px' he='40px' name='Place Order' mt='40px' />


            </div>

            

        </div>

    </div>
   )
}
