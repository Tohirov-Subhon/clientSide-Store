import React from 'react'



export const Card1 = ({id,name,img,price,starIcon,count}) => {
  return (
    <div>
        <div key={id} className='w-[200px]  '>
          <img src={img} alt="" className='w-[100%] h-[180px] mb-[10px]' style={{cursor:"pointer"}} />
          <button className='text-center bg-black w-[100%] h-[25px] text-white rounded-[3px] '>Add Cart</button>
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
