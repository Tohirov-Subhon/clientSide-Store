import { create } from "zustand";
// import { api } from '@/config/config' 

import axios from 'axios';


export const useStore = create((set,get) => ({
    data:[],
    dataCateg: [],
    getProducts: async () => {
    try {
      let { data } = await axios.get("https://store-api.softclub.tj/Product/get-products");
      set( {data:data.data.products} );
      console.log({data:data.data});
      
    } catch (error) {
      console.log(error);
    }
  },
  getCategory: async () =>{
    try {
      let { dataCateg } = await axios.get("https://store-api.softclub.tj/Category/get-categories");
      set( {categories:dataCateg.data} );
      console.log({data:dataCateg.data});
      
    } catch (error) {
      console.log(error);
    }
  }
}))