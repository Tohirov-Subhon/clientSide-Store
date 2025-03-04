import React from 'react'

export const Card3 = ({id,img,name}) => {
  return (
    <>
    
    <div key={id} className=' w-[220px] border-[1.5px] p-[10px_10px] rounded-[5px] text-center '>
        <img className='w-[150px] h-[150px] m-auto mb-[10px] rounded-[5px] ' src={`https://store-api.softclub.tj/images/${img}`} alt="" />
        <p>{name}</p>
    </div>

    </>
  )
}
