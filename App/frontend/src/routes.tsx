import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Error from './pages/Error';
import Layout from "./Layout";

const Router = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <Error />
    }
];

export const router = createBrowserRouter(Router.map(item =>
    ({ element: <Layout>{item.element}</Layout>, path: item.path })
));
