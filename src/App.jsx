import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./services/router";
import { addRoute } from "./services/routerConfig";
import { useFetch } from "./components/Blog/useFetch";

function App() {
  const { data: blogs, loading } = useFetch(
    "https://673a371b339a4ce44517933d.mockapi.io/api/v1/blog"
  );
  const [routesReady, setRoutesReady] = useState(false);

  useEffect(() => {
    if (blogs) {
      const blogs_ids = blogs.map((blog) => blog.id);
      addRoute(blogs_ids);
      setRoutesReady(true);
    }
  }, [blogs]);

  if (loading || !routesReady) return <p>Cargando la aplicación...</p>;

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
