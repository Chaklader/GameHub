import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from 'src/pages/ErrorPage.tsx';
import GameDetailPage from 'src/pages/GameDetailPage.tsx';
import HomePage from 'src/pages/HomePage.tsx';
import Layout from 'src/pages/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
    ],
  },
]);

export default router;
