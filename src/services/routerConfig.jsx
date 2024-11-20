import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import BlogPage from "../pages/Blog/BlogPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ViewBlog from "../pages/Blog/ViewBlog.jsx"

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/blogs", element: <BlogPage /> },
];

export const addRoute = (blogs_ids) => {
  blogs_ids.forEach((id) => {
    const exists = routes.some((route) => route.path === `/blogs/${id}`);
    if (!exists) {
      routes.push({
        path: `/blogs/${id}`,
        element: <ViewBlog idb={id} />,
      });
    }
  });
};
