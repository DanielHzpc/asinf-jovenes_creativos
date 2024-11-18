import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import {NextUIProvider} from "@nextui-org/react";
import BlogPage from './pages/Blog/BlogPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/blog",
    element: <BlogPage />
  }
]) 


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
    
  </StrictMode>,
)
