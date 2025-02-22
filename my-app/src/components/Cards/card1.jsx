import React from 'react'

import like from '@/assets/like.svg'
import info from '@/assets/info.svg'

import { useStore } from '@/store/store'

export const Card1 = ({id,name,img,price,starIcon,count,productInMyCart}) => {
  // console.log(img);

  const { addToCart } = useStore()
  
  return (
    <div className='flex flex-wrap '>
        <div key={id} className='w-[200px]  '>
          {/* <img src={img} alt="" className='w-[100%] h-[180px] mb-[10px]' style={{cursor:"pointer"}} /> */}
          <div style={{backgroundImage:`url(${"https://store-api.softclub.tj/images/"+img})`}} className='w-[100%] h-[180px] mb-[10px] rounded-[10px] '>
              <div className='pl-[168px] pt-[5px]'>
                <img src={like} alt="" className='w-[30px] h-[30px] mb-[10px] cursor-pointer' />
                <img src={info} alt="" className='w-[30px] h-[30px]  cursor-pointer' />
              </div>
          </div>
          <button disabled={productInMyCart} onClick={() => addToCart(id)} className='text-center bg-black w-[100%] h-[25px] text-white rounded-[3px] '>Add To Cart</button>
          <div className='w-[100%] h-[30px] bg-[black] text-center text-[white] hidden'>Add To Cart</div>
          <h3 className=' mb-[5px]'>{name}</h3>
          <p className='text-[red] mb-[5px]'>${price}</p>
          <div className='flex gap-[15px]'>
          <img src={starIcon} alt="" />
          
          <p className='text-[gray]'>({count})</p>
          </div>
        </div>
    </div>
  )
}

