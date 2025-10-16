import {Outlet, ScrollRestoration} from "react-router-dom";
import {Container, chakra, useColorMode, Tooltip, IconButton} from "@chakra-ui/react";
import {FaMoon, FaSun} from "react-icons/fa";
import {Navbar} from "../components/ui/NavBar.tsx";


export function DefaultLayout({addNavBar}: { addNavBar: boolean }) {
    const {toggleColorMode, colorMode} = useColorMode();
    return (
        <chakra.div width={"100%"}>
            <chakra.div minHeight={"90vh"} width={"100%"}>
                {addNavBar && <Navbar/>}
                <chakra.main marginBottom={"2rem"}>
                    <Container maxW={"5xl"} width={'100vw'}>
                        <Outlet/>
                    </Container>
                </chakra.main>
            </chakra.div>
            <Tooltip label={colorMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"} placement="right">
                <IconButton
                    aria-label="toggle theme"
                    rounded="full"
                    size="xs"
                    position="fixed"
                    bottom={4}
                    left={4}
                    onClick={toggleColorMode}
                    icon={colorMode === "dark" ? <FaMoon/> : <FaSun/>}
                />
            </Tooltip>
            <ScrollRestoration/>
        </chakra.div>
    );
}
