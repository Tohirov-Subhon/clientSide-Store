import { create } from "zustand";
// import { api } from '@/config/config' 

import axios from 'axios';
import { axiosRequest } from "@/axiosRequest";


export const useStore = create((set,get) => ({
    data:[],
    // dataCateg: [],
    getProducts: async () => {
    try {
      let { data } = await axiosRequest.get("https://store-api.softclub.tj/Product/get-products");
      set( {data:data.data.products} );
      // console.log({data:data.data});
      
    } catch (error) {
      console.log(error);
    }
  },
  getCategory: async () =>{
    try {
      let { dataCateg } = await axios.get("https://store-api.softclub.tj/Category/get-categories");
      set( {data:dataCateg.data} );
      console.log({data:dataCateg.data});
      
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (id) => {
    try {
      await axiosRequest.post(`https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`)
      console.log('Product added to cart')
    } catch (error) {
      console.log(error)
    }
  },
  getCart: async () => {
    try {
      let { data } = await axiosRequest.get('https://store-api.softclub.tj/Cart/get-products-from-cart')
      set( {data:data.data[0].productsInCart} );
      // console.log({data:data.data});
      
    } catch (error) {
      console.log(error);
    }
  },
  deleteCart: async (id) => {
    try {
      await axiosRequest.delete(`https://store-api.softclub.tj/Cart/delete-product-from-cart?id=${id}`)
      let { data } = await axiosRequest.get('https://store-api.softclub.tj/Cart/get-products-from-cart')
      set( {data:data.data[0].productsInCart} );
    } catch (error) {
      console.log(error)
    }
  }
}))