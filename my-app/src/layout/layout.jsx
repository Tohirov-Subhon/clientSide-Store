import { Outlet, useLocation } from 'react-router-dom'
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


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

export const Layout = () => {


    const [open, setOpen] = React.useState(false);

    let {pathname}=useLocation()
    // console.log(pathname);
    
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
//   console.log(pathname);
  

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

            
            <div className=' p-[20px_20px] '>
            <Link to="/" className={ `block text-[25px] font-[600] mb-[10px] cursor-pointer ${pathname=='/'? 'text-blue-500':'text-[black]'}` }>Home</Link>
            <Link to="/contact" className={`block text-[25px] font-[600]  mb-[10px]  cursor-pointer ${pathname=='/contact'? 'text-blue-500':'text-[black]'}`}>Contact</Link>
            <hr />
            <Link to="/about"  className={`block text-[25px] font-[600]  mb-[10px]  cursor-pointer ${pathname=='/about'? 'text-blue-500':'text-[black]'}`}>About</Link>
            <hr />
            <Link to="/signUp"  className={`block text-[25px] font-[600]  mb-[10px]  cursor-pointer ${pathname=='/signUp'? 'text-blue-500':'text-[black]'}`}>Sign Up</Link>
            <hr />
            </div>

    </Box>
  );

  return (
    <div>
        <div className='p-[20px_40px]  flex justify-between mb-[40px] border-b-[1px] '>

            
            
            <div className=' hidden sm:block '>
                <div className='flex gap-[10px] mt-[12px] '>
                <MenuIcon sx={{marginTop:"8px"}}  onClick={toggleDrawer(true)} />
                <h1 className='text-[25px] font-[700] hidden sm:block '>Exclusive</h1>
                </div>
            </div>

            <img className='w-[160px] sm:hidden  ' src={logo} alt="" />

            <div className='flex gap-[40px] pt-[18px] sm:hidden '>
            <Link to="/" className={ `block   mb-[10px] cursor-pointer ${pathname=='/'? 'border-b-[1.5px]':'text-[black]'}` }>Home</Link>
            <Link to="/contact" className={ `block   mb-[10px] cursor-pointer ${pathname=='/contact'? 'border-b-[1.5px]':'text-[black]'}` }>Contact</Link>
            <Link to="/about" className={ `block   mb-[10px] cursor-pointer ${pathname=='/about'? 'border-b-[1.5px]':'text-[black]'}` }>About</Link>
            <Link to="/signUp" className={ `block   mb-[10px] cursor-pointer ${pathname=='/signUp'? 'border-b-[1.5px]':'text-[black]'}` }>Sign Up</Link>
            </div>

            <div className='flex pt-[20px] gap-[15px] '>
                <input type="search" placeholder='What are you looking for?' className='w-[220px] pl-[10px] h-[32px] border-[1px] rounded-[5px] sm:hidden ' />
                <FavoriteBorderIcon />
                <Link to="/cart"><ShoppingCartIcon /></Link>
            </div>



            <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
            </Drawer>
            

        </div>
        
        <main>
            <Outlet />
        </main>

        <div className='w-[100%] h-[420px] bg-[#000000] sm:h-[100%] mt-[300px] text-[white] '>
            <div className='p-[80px_40px] flex justify-between sm:flex-wrap '>
                <div className='sm:mb-[40px]'>
                    <h2 className='text-[22px] font-[650] mb-[20px] '>Exclusive</h2>
                    <h3 className='text-[18px] font-[600] mb-[15px]'>Subscribe</h3>
                    <p  className='mb-[30px]'>Get 10% off your first order</p>
                    <input type="text" className='w-[180px] h-[35px] border-[1px] rounded-[5px] bg-[transparent] pl-[10px] ' placeholder='Enter your email' />
                </div>
                <div className='sm:mb-[40px]'>
                    <h3 className='text-[18px] font-[600] mb-[15px]'>Support</h3>
                    <p  className='mb-[15px]'>111 Bijoy sarani, Dhaka</p>
                    <p  className='mb-[15px]'>DH 1515, Bangladesh.</p>
                    <p  className='mb-[15px]'>exclusive@gmail.com</p>
                    <p  className='mb-[15px]'>+88015-88888-9999</p>
                </div>
                <div className='sm:mb-[40px]'>
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
