import { createBrowserRouter } from "react-router";
import About from "../components/About";
import Career from "../components/Career";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/categoryNews";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        loader: async () => {
                    const res = await fetch("/news.json")
                    if (!res.ok) {
                        throw new Error('Failed to fetch news data');
                    }
                    return res.json();
                },
        children: [
            {
                index: true,
                Component: CategoryNews,
            },
            {
                path: "/category/:id",
                Component: CategoryNews,                
            },
        ]        
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
        path: "*",
        element: <div>404 Not Found</div>,
    }
])