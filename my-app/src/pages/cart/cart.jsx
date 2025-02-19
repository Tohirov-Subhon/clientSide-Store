import React, { useState } from 'react'

import IMG1 from '@/assets/img/kids_3.jpg'
import starIcon from '@/assets/star.svg'
import { Elderly } from '@mui/icons-material'


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
                    </tr>
                ) )}
            </tbody>
            </table>
        </div>
    </div>
  )
}
