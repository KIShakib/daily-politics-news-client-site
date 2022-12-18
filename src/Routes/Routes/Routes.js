import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login-SignUp/Login/Login";
import SignUp from "../../Pages/Login-SignUp/SignUp/SignUp";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Shared/Profile/Profile";
import PrivateRoute from "../PriveRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://daily-politics-news-server.vercel.app/news")
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://daily-politics-news-server.vercel.app/category/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://daily-politics-news-server.vercel.app/news/${params.id}`)
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    }
])