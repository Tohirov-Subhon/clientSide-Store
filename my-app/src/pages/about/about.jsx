import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

import img1 from '@/assets/about1.svg'
import market from '@/assets/market.svg'
import cash from '@/assets/cash.svg'
import shop from '@/assets/shop.svg'
import service2 from '@/assets/service2.svg'
import human1 from '@/assets/human1.svg'
import human2 from '@/assets/human2.svg'
import human3 from '@/assets/human3.svg'
import truck from '@/assets/truck.svg'
import headPhones from '@/assets/headPhones.svg'
import service from '@/assets/service.svg'

const About = () => {
    return (
        <>
            <div className="max-w-[1200px] mx-[auto]">


                <div className="flex justify-around mt-[100px] mb-[150px] sm:flex-col  ">
                    <div className="w-[40%] sm:w-[100%]">
                        <p className="text-[50px] font-[600]">Our Story</p>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /><br /><br />
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <img src={img1} alt="" />
                </div>


                <div className="flex justify-around p-[20px] mb-[150px] sm:flex-col sm:gap-[30px]">
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <img src={market} alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>

                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto bg-[#DB4444] text-[white] rounded">
                        <img src={cash} alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <img src={shop} alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <img src={service2} alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                </div>


                <div className="rounded flex justify-around  sm:flex-col sm:gap-[20px]">
                    <div className="rounded ">
                        <img className='mb-[10px]' src={human1} alt="" />
                        <p className='mb-[10px]'><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                    <div className="rounded">
                        <img className='mb-[10px]' src={human2} alt="" />
                        <p className='mb-[10px]'><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                    <div className="rounded">
                        <img className='mb-[10px]' src={human3} alt="" />
                        <p className='mb-[10px]'><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                </div>

        <div>
            <div className="flex justify-around mt-[150px] p-[40px] sm:flex-col sm:gap-[20px]">
                <div className="text-center">
                    <img src={truck} alt="" className='m-auto' />
                    <h1> <b className='text-[25px]'>FREE AND FAST DELIVERY</b><br />
                        Free delivery for all orders over $140</h1>
                </div>
                <div className="text-center">
                    <img src={headPhones} alt="" className='m-auto' />
                    <h1> <b className='text-[25px]'>FREE AND FAST DELIVERY</b><br />
                        Free delivery for all orders over $140</h1>
                </div>
                <div className="text-center">
                    <img src={service} alt="" className='m-auto' />
                    <h1> <b className='text-[25px]'>FREE AND FAST DELIVERY</b><br />
                        Free delivery for all orders over $140</h1>
                </div>
            </div>
        </div>


            </div>

        </>
    )
}

export default About
