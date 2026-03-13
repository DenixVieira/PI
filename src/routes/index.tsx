import type { RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/boards";

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
                    element: <Boards/>,
                }
            ]
            }]
    }]

export default routes;