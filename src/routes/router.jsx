import { createBrowserRouter } from "react-router";
import Root from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import { Suspense } from "react";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "../context/PrivateRoute/PrivateRoute";
import Loading from "../components/Loading/Loading";

const categoryNameData = fetch('/categories.json').then(res => res.json());

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        loader: () => fetch('/news.json'),
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'category/:id',
                element: 
                <Suspense fallback="Loading...">
                    <CategoryNews categoryNameData={categoryNameData}></CategoryNews>
                </Suspense>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: 'news-details/:id',
        loader: () => fetch('/news.json'),
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        hydrateFallbackElement: <Loading></Loading>
    }
])

export default router;