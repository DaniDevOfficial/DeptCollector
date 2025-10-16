import { Flex, chakra, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Navbar() {
    const [currentActive, setCurrentActive] = useState<string | undefined>()

    const location = useLocation()

    useEffect(() => {
        setCurrentActive(location.pathname)
    }, [location.pathname])

    const routes = [
        { name: 'Dashboard', path: '/p/dashboard' },
        { name: 'History', path: '/p/history' },
    ]

    return (
        <chakra.nav
            bg='background.base'
            color='text.base'
            padding='1rem'
            position='sticky'
            top={0}
            zIndex={10}
            width='100%'
        >
            <Flex justifyContent='center' alignItems='center'>
                <Flex flexDir='row' gap={6}>
                    {routes.map(route => (
                        <Text
                            as={Link}
                            to={route.path}
                            key={route.name}
                            cursor='pointer'
                            fontWeight={currentActive === route.path ? 'bold' : 'normal'}
                            borderBottom={
                                currentActive === route.path ? '2px solid currentColor' : 'none'
                            }
                            transition='all 0.2s ease-in-out'
                            _hover={{
                                color: 'accent',
                                transform: 'scale(1.05)',
                            }}
                        >
                            {route.name}
                        </Text>
                    ))}
                </Flex>
            </Flex>
        </chakra.nav>
    )
}
