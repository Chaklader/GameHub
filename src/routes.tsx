import {createBrowserRouter} from "react-router-dom";
import Layout from "src/pages/Layout.tsx";
import HomePage from "src/pages/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>}
        ]
    }
]);

export default router;