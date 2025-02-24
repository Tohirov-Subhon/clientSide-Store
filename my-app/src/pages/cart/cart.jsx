import React, { useEffect, useState } from 'react'

import IMG1 from '@/assets/img/kids_3.jpg'
import starIcon from '@/assets/star.svg'
import { Elderly } from '@mui/icons-material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button2 } from '@/components/Button/button2';
import { ButtonRed } from '@/components/Button/buttonRed';
import { useStore } from '@/store/store';
import { Link } from 'react-router-dom';
import { axiosRequest } from '@/axiosRequest';



export const Cart = () => {

    // async function decrementfunc(id) {
    //     try {
    //         await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    const [totalPrice, setTotalPrice] = useState(0)

    const [price, setPrice] = useState(1)


    let { data, getCart, deleteCart,decrementfunc,incrimentfunc,total,clearCart } = useStore()
    // console.log(total);
    
    // const [count,setCount] = useState(1)

    useEffect(() => {
        getCart()
    }, [])

    let count = 1

    return (
        <div>

            <div>
                <table className='w-[90%] m-auto '>
                    <thead>
                        <tr className='text-left h-[70px] '>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el) => (
                            <tr key={el?.product?.id} className='h-[70px] border-b-[1px] shadow-md '>
                                <td>
                                    <div className='flex gap-[15px] '>
                                        <img className='w-[50px] h-[50px]' src={`https://store-api.softclub.tj/images/${el?.product?.image}`} alt="" />
                                        <p className='pt-[13px]'>{el?.product?.productName}</p>
                                    </div>
                                </td>
                                <td>${el?.product?.price}</td>
                                <td>
                                    <div className='flex gap-[10px]'>
                                        <button onClick={() => decrementfunc(el.id)} className='w-[30px] h-[30px] rounded-[5px] border-[1.5px] border-[red] hover:duration-[0.5s] text-[red]  text-center '>-</button>
                                        <h1>{el.quantity}</h1>
                                        <button onClick={() => incrimentfunc(el.id)} className='w-[30px] h-[30px] rounded-[5px] border-[1.5px] bg-[white] border-[blue] text-[blue]  text-center '>+</button>
                                    </div>
                                </td>
                                <td>${el?.product?.price * el.quantity}</td>
                                <td onClick={() => deleteCart(el.id)}><HighlightOffIcon sx={{ color: "red", cursor: "pointer" }} /></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='p-[40px_60px] flex justify-between mt-[50px] '>
                <Button2 title="Return To Shop" color="black" wi="150px" he="45px" />

                <div className='flex gap-[10px] '>
                    <Button2 title="Update Cart" color="black" wi="150px" he="45px" />
                    <div onClick={clearCart}><Button2 title="Remove all" color="#DB4444" wi="150px" he="45px" text="#DB4444"  /></div>
                </div>

            </div>

            <div className='p-[40px_60px] flex justify-between '>
                <div className='flex gap-[15px] '>
                    <input type="text" placeholder='Coupon Code' className='w-[250px] h-[45px] border-[1px] pl-[10px] border-[black] rounded-[5px] ' />
                    <Button2 title="Apply" color="#DB4444" wi="150px" he="45px" text="#DB4444" />
                </div>

                <div className='w-[350px] border-[1.5px] border-[black] p-[20px_20px] '>
                    <h3 className='text-[20px] font-[650] '>Cart Total</h3>
                    <div className='pt-[15px] flex justify-between '>
                        <p>Subtotal:</p>
                        <p>${total}</p>
                    </div>
                    <div className='pt-[15px] flex justify-between mb-[15px] '>
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='pt-[15px] flex justify-between '>
                        <p className='font-[650] '>Total:</p>
                        <h4 className='font-[650]'>${total}</h4>
                    </div>
                    <div className='flex justify-center mt-[25px] '>
                        <Link to='/checkout'><ButtonRed name="Procees to checkout" wi="240px" he="40px" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
