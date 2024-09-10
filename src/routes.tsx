import {createBrowserRouter} from "react-router-dom";
import Layout from "src/pages/Layout.tsx";
import HomePage from "src/pages/HomePage.tsx";
import GameDetailPage from "src/pages/GameDetailPage.tsx";
import ErrorPage from "src/pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'games/:slug', element: <GameDetailPage/>}
        ]
    }
]);

export default router;