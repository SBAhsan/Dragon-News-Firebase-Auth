import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import { Suspense } from "react";

const categoryNameData = fetch('/categories.json').then(res => res.json());

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
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
                loader: () => fetch('/news.json')
            }
        ]
    }
])

export default router;