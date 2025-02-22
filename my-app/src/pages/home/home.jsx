import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import reklama from '@/assets/reklama.svg'

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import IMG1 from '@/assets/img/kids_3.jpg'
import starIcon from '@/assets/star.svg'
import kalonka from '@/assets/kalonka.svg'
import Truck from '@/assets/truck.svg'
import headPhones from '@/assets/headPhones.svg'
import service from '@/assets/service.svg'
import { ButtonRed } from '@/components/Button/buttonRed';
import { HeadingDesc } from '@/components/headingDesc/headingDesc';
import { Card1 } from '@/components/Cards/card1';
import { Card2 } from '@/components/Cards/card2';
import { useStore } from '@/store/store'


export const Home = () => {


  // let data = [
  //   {
  //     id:12,
  //     img:IMG1,
  //     name:"HAVIT HV-G92 Gamepad",
  //     price:"120",
  //     count:"88",
  //     starIcon:starIcon
  //   }
  // ]

  let data2 = [
    {
      id:11,
      name:"Phone"
    },
    {
      id:11,
      name:"Phone"
    },
    {
      id:11,
      name:"Phone"
    },
    {
      id:5,
      name:"Phone"
    },
    {
      id:11,
      name:"Phone"
    },
    {
      id:11,
      name:"Phone"
    },
    {
      id:11,
      name:"Phone"
    },
    
  ]

  let {data = [] ,getProducts , dataCateg,gertCategory} = useStore()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='p-[40px_40px]'>
      
      <div>
      <div className="  grid grid-cols-2  md:grid-cols-12 gap-6">
        <div className="w-[200px] md:col-span-100 bg-white p-4 shadow-md rounded-lg  md:block">
          <ul className="space-y-3 text-gray-700">
           {dataCateg.map((el) => (
            <div key={el.id}>
              <p>{el.subCategoryName}</p>
            </div>
           ))}
          </ul>
        </div>

        <div className="md:col-span-8">
          <div className="">
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <img src={reklama} alt="" className="rounded-lg w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={reklama} alt="" className="rounded-lg w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={reklama} alt="" className="rounded-lg w-full" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      </div>

      <div>

      <HeadingDesc title="Today’s" desc="Flash Sales" mt="80px"  />  
        
        <div>
          

          <div>
            <ArrowCircleLeftIcon sx={{width:"40px",height:"40px",color:"gray",cursor:"pointer"}}/>
            <ArrowCircleRightIcon sx={{width:"40px",height:"40px",color:"gray",cursor:"pointer"}}/>
          </div>

          <div className='flex justify-between flex-wrap'>
            
          {
            data?.map((el) => (
            <div className='mb-[60px]'>
              <Card1 id={el.id} img={el.image} name={el.productName} price={el.price} starIcon={el.starIcon} count={el.quantity}  />
            </div>
            ))
          }

          {/* {console.log(data)} */}


          </div>

          <div className='flex justify-center mb-[40px] mt-[40px] '>
            <Link to='/allProducts'><ButtonRed wi="220px" he="40px" name="View All Products"  /></Link>
          </div>

          <hr />



        </div>

      </div>

      <div className='flex justify-between '>
        <HeadingDesc title="Categories" desc="Browse By Category" mt="80px"  /> 

        <div className='flex gap-[10px] mt-[130px] '>
        <ArrowCircleLeftIcon sx={{width:"40px",height:"40px",color:"gray",cursor:"pointer"}}/>
        <ArrowCircleRightIcon sx={{width:"40px",height:"40px",color:"gray",cursor:"pointer"}}/>
        </div>
      </div>   
      
      <div className='flex justify-between flex-wrap mt-[50px] mb-[50px] '>
          { 
          data2.map((el) => (
            <div key={el.id} className='w-[150px] h-[130px] border-[1.5px] text-center mb-[40px] '>
              <h3>{el.name}</h3>
            </div>
          ))}
      </div>

      <hr />

      <div className='flex justify-between  sm:flex-wrap '>
        <HeadingDesc title="This Month" desc="Best Selling Products" mt="80px"  />
        <ButtonRed name="View All" wi="120px" he="40px" mt="140px" sm="none" />
      </div>

      <div className='flex mt-[80px]'>
        {data.map((el) =>(
            <Card1 id={el.id} img={el.img} name={el.name} price={el.price} starIcon={el.starIcon} count={el.count}  />
          ))}
      </div>


      <div className='w-[100%] h-[450px] bg-[black] text-[white] flex justify-between p-[20px_40px] mt-[150px] sm:flex-wrap sm:h-[850px] '  >
        
        <div >
               <p className='text-[#00FF66] mt-[40px] '>Categories</p>

               <h1 className='text-[35px] font-[700] w-[300px] mt-[20px]  sm:w-[250px]  '>Enhance Your Music Experience</h1>

               <div className='flex gap-[20px] mt-[30px]  sm:flex-wrap '>

                <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
                    <h3 className='font-[650] '>23</h3>
                    <p  className='font-[550] '>Hours</p>
                </div>

                <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
                    <h3 className='font-[650] '>05</h3>
                    <p  className='font-[550] '>Days</p>
                </div>

                <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
                    <h3 className='font-[650] '>59</h3>
                    <p  className='font-[550] '>Minutes</p>
                </div>

                <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
                    <h3 className='font-[650] '>35</h3>
                    <p  className='font-[550] '>Seconds</p>
                </div>

               </div>

               <div className='w-[120px] h-[40px] pt-[7px] rounded-[5px] text-center bg-[#00FF66] cursor-pointer text-[black] mt-[30px] ' >Buy Now!</div>
        </div>

        <div class="seven_right">
              <img className='w-[450px] mt-[70px] ' src={kalonka} alt="" />
        </div>

      </div>

      
      <HeadingDesc title="Our Products" desc="Explore Our Products" mt="120px"  />


      <div className='flex mt-[80px] flex-wrap '>
        {data.map((el) =>(
            <Card1 id={el.id} img={el.img} name={el.name} price={el.price} starIcon={el.starIcon} count={el.count}  />
          ))}
      </div>

      <div className='flex justify-center mt-[44px] '>
        <ButtonRed wi="180px" he="45px" name="View All Products" />
      </div>

      <HeadingDesc title="Featured" desc="New Arrival" mt="120px"  />

      <div>
        {/* Xoli */}
      </div>


      <div className='flex justify-center gap-[120px] mt-[50px]  sm:flex-wrap  '>
          <Card2 img={Truck} title="FREE AND FAST DELIVERY" desc="Free delivery for all orders over $140" />
          <Card2 img={headPhones} title="24/7 CUSTOMER SERVICE" desc="Friendly 24/7 customer support" />
          <Card2 img={service} title="MONEY BACK GUARANTEE" desc="We reurn money within 30 days" />
      </div>

    </div>
  )
}
