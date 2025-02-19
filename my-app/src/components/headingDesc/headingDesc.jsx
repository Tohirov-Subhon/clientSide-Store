import React from 'react'

export const HeadingDesc = ({title,desc,mt}) => {
  return (
   <>
     <div style={{marginTop:`${mt}`}}>
        <div className='flex'>
            <div className='w-[20px] h-[35px] rounded-[3px] bg-[#DB4444] '></div>
            <p className='text-[#DB4444] mt-[5px] ml-[8px] '>{title}</p>
        </div>
        <h1 className='text-[30px] font-[700] mt-[10px] '>{desc}</h1>
    </div>
   </>
  )
}
