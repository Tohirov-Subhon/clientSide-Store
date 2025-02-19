import React from 'react'

export const Card2 = ({img,title,desc}) => {
  return (
    <div className='text-center '>
        <img className='w-[60px] m-auto mb-[15px] ' src={img} alt="" />
        <h3 className='text-[18px] font-[650] '>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}
