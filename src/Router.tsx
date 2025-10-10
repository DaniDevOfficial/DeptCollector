import {RouterProvider, createHashRouter} from "react-router-dom";
import {DefaultLayout} from "./layouts/Default";
import {HomePage} from "./pages/Home";
import {Box, Flex, useColorModeValue} from "@chakra-ui/react";


const router = createHashRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                index: true, // same path as parent: "/"
                element: <HomePage/>,
            }
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
