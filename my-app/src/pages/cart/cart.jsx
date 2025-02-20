import React, { useState } from 'react'

import IMG1 from '@/assets/img/kids_3.jpg'
import starIcon from '@/assets/star.svg'
import { Elderly } from '@mui/icons-material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button2 } from '@/components/Button/button2';
import { ButtonRed } from '@/components/Button/buttonRed';



let data = [
  {
    id:12,
    img:IMG1,
    name:"HAVIT HV-G92 Gamepad",
    price:"120",
    count:"88",
    starIcon:starIcon
  }
]



export const Cart = () => {

    
    const [count,setCount] = useState(data.map((el) => el.count))

  return (
    <div>
        
        <div>
            <table className='w-[90%] m-auto '>
                <thead>
                    <tr className='text-left h-[70px] '>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
                {data.map((el) => (
                    <tr key={el.id} className='h-[70px] border-b-[1px] '>
                        <td>
                            <div className='flex gap-[15px] '>
                                <img className='w-[50px] h-[50px]' src={el.img} alt="" />
                                <p className='pt-[13px]'>{el.name}</p>
                            </div>
                        </td>
                        <td>${el.price}</td>
                        <td><input className='w-[50px] h-[30px] rounded-[3px] border-[1px] text-center ' onChange={(e) => setCount(e.target.value)} type="number" value={count} /></td>
                        <td>{el.price * el.count}</td>
                        <td><HighlightOffIcon sx={{color:"red",cursor:"pointer"}} /></td>
                    </tr>
                ) )}
            </tbody>
            </table>
        </div>

        <div className='p-[40px_60px] flex justify-between mt-[50px] '>
            <Button2 title="Return To Shop" color="black" wi="150px" he="45px" />

            <div className='flex gap-[10px] '>
            <Button2 title="Update Cart" color="black" wi="150px" he="45px" />
            <Button2 title="Remove all" color="#DB4444" wi="150px" he="45px" text="#DB4444" />
            </div>

        </div>

        <div className='p-[40px_60px] flex justify-between '>
            <div className='flex gap-[15px] '>
                <input type="text" placeholder='Coupon Code' className='w-[250px] h-[45px] border-[1px] pl-[10px] border-[black] rounded-[5px] ' />
                <Button2 title="Apply" color="#DB4444" wi="150px" he="45px" text="#DB4444" />
            </div>
           
            <div className='w-[350px] border-[1.5px] border-[black] p-[20px_20px] '>
                <h3 className='text-[20px] font-[650] '>Cart Total</h3>
                <div className='pt-[15px] flex justify-between '>
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className='pt-[15px] flex justify-between mb-[15px] '>
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='pt-[15px] flex justify-between '>
                    <p className='font-[650] '>Total:</p>
                    <h4 className='font-[650]'>$1750</h4>
                </div>
                <div className='flex justify-center mt-[25px] '>
                    <ButtonRed name="Procees to checkout" wi="240px" he="40px" />
                </div>
            </div>
        </div>
    </div>
  )
}
