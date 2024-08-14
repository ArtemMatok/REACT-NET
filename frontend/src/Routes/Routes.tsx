import App from "@/App";
import HomePage from "@/Page/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {path:"", element:<HomePage />}
        ]
    }
])