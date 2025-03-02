import { create } from "zustand";
// import { api } from '@/config/config'

import axios from "axios";
import { axiosRequest } from "@/axiosRequest";
import { Category } from "@mui/icons-material";
import { dark } from "@mui/material/styles/createPalette";
import { data } from "react-router-dom";

export const useStore = create((set, get) => ({
  data: [],
  category:[],
  cart:[],
  // dataCateg: [],
  total: "",
  getProducts: async () => {
    try {
      let { data } = await axiosRequest.get(
        "https://store-api.softclub.tj/Product/get-products"
      );
      set({ data: data.data.products });
      // console.log({data:data.data});
    } catch (error) {
      console.log(error);
    }
  },
  getCategory: async () => {
    try {
      let { data } = await axios.get(
        "https://store-api.softclub.tj/Category/get-categories"
      );
      set({ category: data.data });
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (id) => {
    try {
      await axiosRequest.post(
        `https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`
      );
      console.log("Product added to cart");
    } catch (error) {
      console.log(error);
    }
  },
  getCart: async () => {
    try {
      let { data } = await axiosRequest.get(
        "https://store-api.softclub.tj/Cart/get-products-from-cart"
      );
      set({ cart: data.data[0].productsInCart });
      set({ total: data.data[0].totalPrice });
      // console.log({data:data.data});
    } catch (error) {
      console.log(error);
    }
  },
  deleteCart: async (id) => {
    try {
      await axiosRequest.delete(
        `https://store-api.softclub.tj/Cart/delete-product-from-cart?id=${id}`
      );
      let { data } = await axiosRequest.get(
        "https://store-api.softclub.tj/Cart/get-products-from-cart"
      );
      set({ data: data.data[0].productsInCart });
    } catch (error) {
      console.log(error);
    }
  },
  clearCart: async (id) => {
    try {
      await axiosRequest.delete(
        "https://store-api.softclub.tj/Cart/clear-cart"
      );
      let { data } = await axiosRequest.get(
        "https://store-api.softclub.tj/Cart/get-products-from-cart"
      );
      set({ data: data.data[0].productsInCart });
    } catch (error) {
      console.log(error);
    }
  },
  getProductById: async (id) => {
    try {
      let { data } = await axiosRequest.get(
        `/Product/get-product-by-id?id=${id}`
      );
      set({ data: data.data });
    } catch (error) {
      console.log(error);
    }
  },
  decrementfunc: async (id) => {
    try {
      await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`);
      get().getCart();
      // set( {data:data.data.products} );
    } catch (error) {
      console.error(error);
    }
  },
  incrimentfunc: async (id) => {
    try {
      await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`);
      get().getCart();

      // set( {data:data.data.products} )
    } catch (error) {
      console.error(error);
    }
  },
}));
