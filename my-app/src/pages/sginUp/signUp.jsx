import React, { useState } from 'react'
import styled from 'styled-components';

import { ButtonRed } from '@/components/Button/buttonRed';
import { Link, UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {
  
  const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: black;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #DB4444;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: #DB4444;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: #DB4444;
  }

  .signin a:hover {
    text-decoration: underline red;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 310px;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: #DB4444;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }

  .submit:hover {
    border: 1.5px solid #DB4444;
    background-color: white;
    color: #DB4444;
    transition-duration: 0.5s;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;


  const navigate = useNavigate();


 

  const login = async (e) => {

    e.preventDefault()

    const user = {
      userName: e.target['name'].value,
      password: e.target['password'].value
    }

    try {
      let {data} = await axios.post('https://store-api.softclub.tj/Account/login',user)
      localStorage.setItem('access_token',data.data)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  
  // const addToCart = async (id) => {
  //   try {
  //     await axios.post(`https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`,{
  //       Headers:{
  //         authorization: `Bearer ${localStorage.getItem('access_token')}`,
  //         // 'Content-Type': 'application/json'
  //       }})
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  

  return (
     <div className='flex justify-center'>
       <StyledWrapper>
            <form className="form" onSubmit={login}>
              <p className="title">Create an account </p>
              <p className="message">Enter your details below </p>
              <div className="flex">
                <label>
                  <input name='name'  required placeholder type="text" className="input w-[300px]" />
                  <span>Name</span>
                </label>
              </div>  
              {/*   */}
              {/* <label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} required placeholder type="email" className="input" />
                <span>Email</span>
              </label>  */}
              <label>
                <input name='password' required placeholder type="password" className="input" />
                <span>Password</span>
              </label>
              {/* <label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder type="password" className="input" />
                <span>Confirm password</span>
              </label> */}
              <button type='submit' className="submit" >Log In</button>
              <p className="text-center cursor-pointer text-[#DB4444] ">Forget Password?</p>
            </form>
          </StyledWrapper>
     </div>
  )
}





