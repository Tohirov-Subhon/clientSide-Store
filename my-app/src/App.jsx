import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/layout'

import {Home} from '@/pages/home/home'
import About from '@/pages/about/about'
import Contact from '@/pages/contact/contact'
import {SignUp} from '@/pages/sginUp/signUp'
import { RouterProvider } from 'react-router'
import { Cart } from './pages/cart/cart'
import { AllProducts } from './pages/allProducts/allProducts'
import { Wishlist } from './pages/wishList/wishlist'

export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/signUp',
          element: <SignUp/>
        },
        {
          path: '/cart',
          element: <Cart/>
        },
        {
          path: '/allProducts',
          element: <AllProducts/>
        },
        {
          path: '/wishlist',
          element: <Wishlist/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
