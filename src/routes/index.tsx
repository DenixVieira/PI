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
                    path:"",
                    element: <Boards/>,
                }
            ]
            }]
    }]

export default routes;