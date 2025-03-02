import React from 'react'

import like from '@/assets/like.svg'
import info from '@/assets/info.svg'

import starIcon from '@/assets/star.svg'

import { useStore } from '@/store/store'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const Card1 = ({id,name,img,price,count,productInMyCart,mt}) => {
  // console.log(img);

  const { addToCart } = useStore()


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  return (
    <div className='flex flex-wrap ' style={{marginTop:`${mt}`}}>
        <div key={id} className='w-[200px] mb-[150px]  group relative '>
          {/* <img src={img} alt="" className='w-[100%] h-[180px] mb-[10px]' style={{cursor:"pointer"}} /> */}
          <div className='w-[200px] h-[180px] bg-[#F5F5F5] p-[10px_10px]  '>
          <div style={{backgroundImage:`url(${"https://store-api.softclub.tj/images/"+img})`}} className='w-[100px]  m-auto h-[100px] mb-[10px] mt-[20px]  bg-cover bg-center '>
          </div>
          <div className='pl-[148px] pt-[5px] absolute mt-[-130px] '>
                <img src={like} alt="" className='w-[30px] h-[30px] mb-[10px] cursor-pointer' />
                <Link to={`/info/${id}`}><img src={info} alt="" className='w-[30px] h-[30px]  cursor-pointer' /></Link>
              </div>
          </div>

          
          <button disabled={productInMyCart} onClick={() => {addToCart(id),handleClick()}} className='w-[100%] h-[25px] rounded-b-[5px] text-center text-[white] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Add To Cart</button>
          {/* <div className='w-[100%] h-[30px] bg-[black] text-center text-[white] hidden'>Add To Cart</div> */}
          <h3 className=' mt-[15px] mb-[5px]'>{name}</h3>
          <p className='text-[red] mb-[5px]'>${price}</p>
          <div className='flex gap-[15px]'>
          <img src={starIcon} alt="" />
          
          <p className='text-[gray]'>({count})</p>
          </div>
        </div>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Poduct Add To Cart !
        </Alert>
      </Snackbar>

    </div>
  )
}

