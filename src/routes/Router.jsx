import { createBrowserRouter, Navigate } from "react-router";
import About from "../components/About";
import Career from "../components/Career";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import CategoryNews from "../components/CategoryNews";
import NewsPage from "./../components/NewsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    loader: async () => {
      const res = await fetch("/news.json");
      if (!res.ok) {
        throw new Error("Failed to fetch news data");
      }
      return res.json();
    },
    children: [
      {
        index: true,
        Component: CategoryNews,
      },
      {
        path: "category/:id",
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/career",
    Component: Career,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news/:id",
    element: <NewsPage />,
    loader: async () => {
      const res = await fetch("/news.json");
      if (!res.ok) {
        throw new Error("Failed to fetch news data");
      }
      return res.json();
    },
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
