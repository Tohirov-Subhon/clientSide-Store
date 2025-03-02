import { Button } from "@mui/material";


import phone from '@/assets/phone.svg'
import email from '@/assets/email.svg'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Contact = () => {

  const [request, setRequest] = useState(false);
  const [buy, setBuy] = useState(true)

  let navigate = useNavigate()

  return (
    <>

{request && 
    <div className="flex flex-col items-center justify-center min-h-screen sm:w-[350px] m-auto sm:mt-[-100px] text-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-2xl font-bold text-green-600">Your request has been sent!</h1>
        <p className="text-gray-700 mt-4">Thank you for your request. Please wait while we process your request.</p>
        <div className="mt-6">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
}

  {buy&& 
  
  <div className="m-auto max-w-[1200px] p-[20px]">
      
      <div className='flex p-[5px_60px]  '>
      <Link to='/'><p className='text-[gray] mr-[10px]'>Home /</p></Link>
      <Link to='/contact'><p className='text-[black]'>Contact</p></Link>
      </div>

      <div className="flex justify-between sm:flex-col gap-6">
        <div className="shadow-md w-full sm:w-auto flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex gap-4 items-center">
              <img src={phone} alt="Phone" />
              <h1 className="text-lg font-semibold">Call To Us</h1>
            </div>
            <p>
              We are available 24/7, 7 days a week. <br />
              Phone: +8801611112222
            </p>
          </div>

          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex gap-4 items-center">
              <img src={email} alt="Email" />
              <h1 className="text-lg font-semibold">Write To Us</h1>
            </div>
            <p>
              Fill out our contact form, and we’ll get back to you shortly.
            </p>
          </div>
        </div>

        <div className="shadow-md w-full p-6 flex flex-col gap-4">
          <div className="flex gap-4 sm:flex-col">
            <input type="text" placeholder="Name" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Email" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Phone" className="border p-3 rounded w-full" />
          </div>
          <textarea placeholder="Your Message" className="border p-3 rounded w-full h-32"></textarea>
          <Button onClick={() => {setRequest(true),setBuy(false)}} sx={{width:"150px",backgroundColor:'#DB4444'}} variant="contained" className="bg-[#DB4444] w-full sm:w-auto">
            Send Message
          </Button>
        </div>
      </div>
    </div>


  }

    </>
  );
};

export default Contact;
