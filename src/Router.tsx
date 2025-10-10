import {RouterProvider, createHashRouter} from "react-router-dom";
import {DefaultLayout} from "./layouts/Default";
import {HomePage} from "./pages/Home";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import {Login} from "./pages/Login.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";


const router = createHashRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                index: true, // same path as parent: "/"
                element: <HomePage/>,
            },
            {
                element: <Login />,
                path: 'login',
            },
            {
                element: <Dashboard />,
                path: 'dashboard',
            },
        ],
    },

]);

export function Router() {
    return (
        <Box
            minH="100vh"
            minW="100vh"
            bg={useColorModeValue("gray.50", "gray.900")}
        >

            <RouterProvider router={router}/>
        </Box>
    )
}
