import {RouterProvider, createHashRouter} from "react-router-dom";
import {DefaultLayout} from "./layouts/Default";
import {HomePage} from "./pages/Home";
import {Box, useColorModeValue} from "@chakra-ui/react";
import {Login} from "./pages/Login.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {History} from "./pages/History.tsx";


const router = createHashRouter([
    {
        path: "/",
        element: <DefaultLayout addNavBar={false}/>,
        children: [
            {
                index: true, // same path as parent: "/"
                element: <HomePage/>,
            },
            {
                element: <Login/>,
                path: 'login',
            },
        ],
    }, {
        path: "/p",
        element: <DefaultLayout addNavBar={true}/>,
        children: [
            {
                element: <Dashboard/>,
                path: 'dashboard',
            },
            {
                element: <History/>,
                path: 'history',
            },
        ],
    }

]);

export function Router() {
    return (
        <Box
            minH="100vh"
            minW="100vh"
            bg={useColorModeValue("gray.50", "gray.900")}
            py={10}
        >
            <RouterProvider router={router}/>
        </Box>
    )
}
