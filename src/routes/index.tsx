import type { RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/boards";
import Home from "../pages/Home";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                children: [
                {
                    path:"/chamados",
                    element: <Boards/>,
                },
                {
                    path:"/home",
                    element: <Home/>,
                }
            ]
            }]
    }]

export default routes;