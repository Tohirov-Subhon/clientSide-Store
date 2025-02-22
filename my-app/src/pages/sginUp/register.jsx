import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components';



export const Register = () => {


  const navigate = useNavigate()

 const [name,setName] = useState('')
 const [phone, setPhone] = useState('')
 const [email,setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [confirmPassword, setConfirmPassword] = useState('')



 const register = async (e) => {
  e.preventDefault()
    const user = {
        userName: e.target['name'].value,
        phoneNumber: e.target['phone'].value,
        email: e.target['email'].value,
        password: e.target['password'].value,
        confirmPassword: e.target['confirmPassword'].value
    }
    
    try {
        let res=await axios.post('https://store-api.softclub.tj/Account/register', user)
        console.log(res);
        
        navigate('/signUp')
        console.log(user)
    } catch (error) {
        console.log(error)
    }
 }

  return (
    <div className='flex justify-center'>
        <StyledWrapper>
      <form className="form" onSubmit={register}>
        <p className="title">Create an account </p>
        <p className="message">Enter your details below </p>
        <div className="flex">
          <label>
            <input name='name' required placeholder type="text" className="input" />
            <span>Name</span>
          </label>
        </div>  
        <label>
            <input name='phone' required placeholder type="text" className="input" />
            <span>Phone</span>
          </label>
        <label>
          <input name='email' required placeholder type="email" className="input" />
          <span>Email</span>
        </label> 
        <label>
          <input name='password' required placeholder type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input name='confirmPassword' required placeholder type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button type='submit' className="submit" >Submit</button>
        <p className="signin">Already have an acount ? <Link to='/signUp'><a href="#">Signin</a></Link> </p>
      </form>
    </StyledWrapper>
    </div>
  )
}



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
  color: vlack;
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
  cursor: pointer;
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
  width: 300px;
  height: 50px;
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
  background-color: white ;
  color: #DB4444;
  cursor: pointer;
  transition: 0.2s ;
  border:1.5px solid #DB4444;
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