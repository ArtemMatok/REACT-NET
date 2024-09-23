import App from "@/App";
import CartOrderLayout from "@/CartOrder/layout";
import CheckOut from "@/CartOrder/page/CheckOut";
import Dashboard from "@/Dashboard/Dashboard";
import HomePage from "@/Page/HomePage/HomePage";
import NotFound from "@/Page/NotFound/NotFound";
import ProductPage from "@/Page/ProductPage/ProductPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {path:"", element:<HomePage />},
            {path:"notFound", element:<NotFound />},
            {path:"product/:id", element:<ProductPage />}
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard />,
        // children:[
        //     {path:"", element:<HomePage />},
        //     {path:"notFound", element:<NotFound />},
        //     {path:"product/:id", element:<ProductPage />}
        // ]
    },
    {
        path:"/cart",
        element:<CartOrderLayout />,
        children:[
            {path:"", element:<CheckOut/>}
        ]
    }
])