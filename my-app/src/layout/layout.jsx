import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'

import logo from '@/assets/logo.svg'
import basket from '@/assets/basket.svg'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Layout = () => {
  return (
    <div>
        <div className='p-[20px_40px]  flex justify-between mb-[40px] border-b-[1px] '>

            <img className='w-[160px] ' src={logo} alt="" />

            <div className='flex gap-[40px] pt-[18px] '>
            <Link to="/" className='border-b-[1.5px] '>Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signUp">Sign Up</Link>
            </div>

            <div className='flex pt-[20px] gap-[15px] '>
                <input type="search" placeholder='What are you looking for?' className='w-[220px] pl-[10px] h-[32px] border-[1px] rounded-[5px] ' />
                <FavoriteBorderIcon />
                <ShoppingCartIcon />
            </div>
            

        </div>
        
        <main>
            <Outlet />
        </main>

        <div className='w-[100%] h-[420px] bg-[#000000] mt-[300px] text-[white] '>
            <div className='p-[80px_40px] flex justify-between '>
                <div>
                    <h2 className='text-[22px] font-[650] mb-[20px] '>Exclusive</h2>
                    <h3 className='text-[18px] font-[600] mb-[15px]'>Subscribe</h3>
                    <p  className='mb-[30px]'>Get 10% off your first order</p>
                    <input type="text" className='w-[180px] h-[35px] border-[1px] rounded-[5px] bg-[transparent] pl-[10px] ' placeholder='Enter your email' />
                </div>
                <div>
                    <h3 className='text-[18px] font-[600] mb-[15px]'>Support</h3>
                    <p  className='mb-[15px]'>111 Bijoy sarani, Dhaka</p>
                    <p  className='mb-[15px]'>DH 1515, Bangladesh.</p>
                    <p  className='mb-[15px]'>exclusive@gmail.com</p>
                    <p  className='mb-[15px]'>+88015-88888-9999</p>
                </div>
                <div>
                    <h3 className='text-[18px] font-[600] mb-[15px]'>Account</h3>
                    <p className='mb-[15px]'>My Account</p>
                    <p className='mb-[15px]'>Cart</p>
                    <p className='mb-[15px]'>Wishlist</p>
                    <p className='mb-[15px]'>Shop</p>
                </div>
                <div>
                    <h3 className='text-[18px] font-[600] mb-[15px]'>Quick Link</h3>
                    <p className='mb-[15px]'>Privacy Policy</p>
                    <p className='mb-[15px]'>Terms Of Use</p>
                    <p className='mb-[15px]'>FAQ</p>
                    <p className='mb-[15px]'>Contact</p>
                </div>
                <div>
                    <h3  className='text-[18px] font-[600] mb-[15px]'>Social</h3>
                    <div className='flex gap-[15px] '>
                    <FacebookIcon  />
                    <TwitterIcon  />
                    <InstagramIcon  />
                    <h1 className='text-[20px] font-[700]'>in</h1>
                    </div>
                </div>
            </div>
            <div className='border-t-[1px] pt-[20px] text-center'>
                <p className='text-[gray]'><CopyrightIcon/> Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    </div>
  )
}
