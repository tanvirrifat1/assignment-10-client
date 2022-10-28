import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CheckOut from "../../components/CheakOut/CheakOut";
import Courses from "../../components/Courses/Courses";
import Faq from "../../components/Faq/Faq";
import FullCourseDetails from "../../components/FullCourseDetails/FullCourseDetails";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import Register from "../../components/Register/Register";
import Main from "../../Layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            }, {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/courses",
                element: <Courses></Courses>,
                loader: () => fetch('https://learn-web-assignment-server.vercel.app/courses')
            }, {
                path: "/courses/:id",
                element: <FullCourseDetails></FullCourseDetails>,
                loader: ({ params }) => fetch(`https://learn-web-assignment-server.vercel.app/courses/${params.id}`)
            }, {
                path: "/checkout/:id",
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://learn-web-assignment-server.vercel.app/courses/${params.id}`)
            }, {
                path: "/blog",
                element: <Blog></Blog>

            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },


            {
                path: "*",
                element: <NotFound></NotFound>

            }
        ]
    }
])