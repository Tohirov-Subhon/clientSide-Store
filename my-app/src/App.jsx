import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/layout'

import {Home} from '@/pages/home/home'
import {About} from '@/pages/about/about'
import {Contact} from '@/pages/contact/contact'
import {SignUp} from '@/pages/sginUp/signUp'
import { RouterProvider } from 'react-router'
import { Cart } from './pages/cart/cart'

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
