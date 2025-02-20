import React from 'react'

export const Button2 = ({wi,he,title,color,text}) => {
  return (
    <>
        <button style={{borderColor:`${color}`,width:`${wi}`,height:`${he}`,color:`${text}`}} className="rounded-[5px] text-center cursor-pointer border-[1px]">{title}</button>
    </>
  )
}
