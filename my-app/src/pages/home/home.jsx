import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import reklama from '@/assets/img/reklama4.webp'
import reklama2 from '@/assets/img/reklama2.png'
import reklama3 from '@/assets/img/reklama3.jpg'

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
import { api } from '@/config/config';
import { Card3 } from '@/components/Cards/card3';



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




export const Home = () => {

const [selectedCategory, setSelectedCategory] = useState("All");

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
      id: 11,
      name: "Phone"
    },
    {
      id: 11,
      name: "Phone"
    },
    {
      id: 11,
      name: "Phone"
    },
    {
      id: 5,
      name: "Phone"
    },
    {
      id: 11,
      name: "Phone"
    },
    {
      id: 11,
      name: "Phone"
    },
    {
      id: 11,
      name: "Phone"
    },

  ]

  let { data ,category, getProducts, getCategory } = useStore()

  useEffect(() => {
    getProducts()
    getCategory()

  }, [])



  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 23,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className='p-[0px_40px]'>

      <div>
        <div className="flex gap-[50px] flex-wrap ">
          <div className="w-[250px] h-[450px]  md:col-span-100 bg-white p-4 shadow-md rounded-lg  md:block sm:w-[300px] ">
            <ul className="space-y-3 text-gray-700">
              {category.length>0&&category.map((el) => (
                <li
                key={el.id}
                className={`cursor-pointer p-2 rounded ${
                  selectedCategory === el.categoryName ? "text-[red]" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(el.categoryName)}
              >
                {el.categoryName}
              </li>
              ))}
            </ul>
          </div>

        <div className=" flex items-center justify-center min-h-screen mt-[-80px] sm:ml-[-40px] sm:mb-[320px]  ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-[880px] h-[400px] sm:w-[400px] sm:h-[400px] "
      >
        <SwiperSlide>
          <div className="h-[400px] sm:h-[300px] ">
          <img className='h-[400px] sm:h-[300px] ' src={reklama} alt="" />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px]   sm:h-[300px]">
            <img className='h-[400px] sm:h-[300px] w-full ' src={reklama2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[400px] sm:h-[300px] ">
          <img className='h-[400px] sm:h-[300px] w-full ' src={reklama3} alt="" />

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
        </div>

      </div>

      <div>

        

        <div className='flex justify-between mt-[80px] sm:mt-[-400px]'>
        
        <div className='flex sm:flex-wrap'>
        <HeadingDesc title="Today’s" desc="Flash Sales" mt="0px" />
        <p className="ml-[100px] mt-[42px] text-[30px] font-[700] sm:ml-[7px] sm:mt-[10px] sm:mb-[50px]  ">
            {String(timeLeft.hours).padStart(2, "0")} :{" "}
            {String(timeLeft.minutes).padStart(2, "0")} :{" "}
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
        </div>
        <div className='flex gap-[15px] mt-[40px] sm:mt-[50px] sm:hidden'>
            <ArrowCircleLeftIcon sx={{ width: "40px", height: "40px", color: "gray", cursor: "pointer" }} />
            <ArrowCircleRightIcon sx={{ width: "40px", height: "40px", color: "gray", cursor: "pointer" }} />
          </div>
        </div>

        <div>

          <div className='flex gap-[40px] flex-wrap sm:ml-[50px]'>

            {
             data.length>0&&data?.map((el) => (

                <Card1 key={el.id}  id={el.id} productInMyCart={el.productInMyCart} img={el.image} name={el.productName} price={el.price}  count={el.quantity} className='gap-[10px]' />
              ))
            }

            {/* {console.log(data)} */}


          </div>

          <div className='flex justify-center mb-[40px] mt-[40px] '>
            <Link to='/allProducts'><ButtonRed wi="220px" he="40px" name="View All Products" /></Link>
          </div>

          <hr />



        </div>

      </div>

      <div className='flex justify-between '>
        <HeadingDesc title="Categories" desc="Browse By Category" mt="80px" />

        <div className='flex gap-[10px] mt-[130px] sm:hidden '>
          <ArrowCircleLeftIcon sx={{ width: "40px", height: "40px", color: "gray", cursor: "pointer" }} />
          <ArrowCircleRightIcon sx={{ width: "40px", height: "40px", color: "gray", cursor: "pointer" }} />
        </div>
      </div>

        <div className='flex  gap-[40px] flex-wrap sm:ml-[50px]'>

            {
             category.length>0&&category?.map((el) => (

              <Card3 key={el.id} id={el.id} img={el.categoryImage} name={el.categoryName} />
            
              ))
            }

            {/* {console.log(data)} */}


          </div>

      <hr />

      <div className='flex justify-between  sm:flex-wrap '>
        <HeadingDesc title="This Month" desc="Best Selling Products" mt="80px" />
        <div className='hidden'><Link to='/allProducts'><ButtonRed name="View All" wi="120px" he="40px" mt="140px" sm="none" /></Link></div>
      </div>

        <div className='flex gap-[40px] flex-wrap sm:ml-[50px]'>

            {
             data.length>0&&data?.map((el) => (

                <Card1 key={el.id} id={el.id} productInMyCart={el.productInMyCart} img={el.image} name={el.productName} price={el.price}  count={el.quantity} className='gap-[10px]' />
              ))
            }

            {/* {console.log(data)} */}


          </div>


      <div className='w-[100%] h-[450px] bg-[black] text-[white] flex justify-between p-[20px_40px] mt-[150px] sm:flex-wrap sm:h-[850px] '  >

        <div >
          <p className='text-[#00FF66] mt-[40px] '>Categories</p>

          <h1 className='text-[35px] font-[700] w-[300px] mt-[20px]  sm:w-[250px]  '>Enhance Your Music Experience</h1>

          <div className='flex gap-[20px] mt-[30px]  sm:flex-wrap '>

            <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
              <h3 className='font-[650] '>23</h3>
              <p className='font-[550] '>Hours</p>
            </div>

            <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
              <h3 className='font-[650] '>05</h3>
              <p className='font-[550] '>Days</p>
            </div>

            <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
              <h3 className='font-[650] '>59</h3>
              <p className='font-[550] '>Minutes</p>
            </div>

            <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
              <h3 className='font-[650] '>35</h3>
              <p className='font-[550] '>Seconds</p>
            </div>

          </div>

          <div className='w-[120px] h-[40px] pt-[7px] rounded-[5px] text-center bg-[#00FF66] cursor-pointer text-[black] mt-[30px] ' >Buy Now!</div>
        </div>

        <div class="seven_right">
          <img className='w-[450px] mt-[70px] ' src={kalonka} alt="" />
        </div>

      </div>


      <HeadingDesc title="Our Products" desc="Explore Our Products" mt="120px" />



      


        <div className='flex  gap-[40px] flex-wrap sm:ml-[50px]'>

            {
             data.length>0&&data?.map((el) => (

                <Card1 key={el.id} id={el.id} productInMyCart={el.productInMyCart} img={el.image} name={el.productName} price={el.price}  count={el.quantity} className='gap-[10px]' />
              ))
            }

            {/* {console.log(data)} */}


          </div>

      <div className='flex justify-center mt-[44px] '>
        <Link to='/allProducts'><ButtonRed wi="180px" he="45px" name="View All Products" /></Link>
      </div>

      <HeadingDesc title="Featured" desc="New Arrival" mt="120px" />

      <div>
        {/* Xoli */}
      </div>


      <div className='flex justify-center gap-[120px] mt-[80px]  sm:flex-wrap  '>
        <Card2 img={Truck} title="FREE AND FAST DELIVERY" desc="Free delivery for all orders over $140" />
        <Card2 img={headPhones} title="24/7 CUSTOMER SERVICE" desc="Friendly 24/7 customer support" />
        <Card2 img={service} title="MONEY BACK GUARANTEE" desc="We reurn money within 30 days" />
      </div>

    </div>
  )
}
