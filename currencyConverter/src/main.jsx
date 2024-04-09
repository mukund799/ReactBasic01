import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Count from './component/Count.jsx'

const router = createBrowserRouter([{
  path:'/',
  element: <Layout />,
  children: [
    {
      path:"",
      element: <Home />
      
    },
    {
      path:"about",
      element: <About />
      
    },
    {
      path:"contact",
      element: <Contact />
      
    },
    {
      path:'count/:countId',
      element:<Count />
    }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
