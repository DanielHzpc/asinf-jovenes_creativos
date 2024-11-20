import LoginPage from '../pages/LoginPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import BlogPage from '../pages/Blog/BlogPage.jsx'
import HomePage from '../pages/HomePage.jsx'

export const routes = [
    {
      path: "/",
      element: <HomePage />
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
      path: "/blogs",
      element: <BlogPage />
    }
  ]