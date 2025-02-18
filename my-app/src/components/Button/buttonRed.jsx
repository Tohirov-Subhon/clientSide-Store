import React from 'react'

export const ButtonRed = ({name,wi,he,mt}) => {
  return (
    <>
        <button style={{width:`${wi}`,height:`${he}`,marginTop:`${mt}`,backgroundColor:"#DB4444",color:"white",borderRadius:"5px",textAlign:"center"}}>{name}</button>
    </>
  )
}
