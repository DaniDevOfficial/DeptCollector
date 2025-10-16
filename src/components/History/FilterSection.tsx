import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    IconButton,
    Select, useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import {ArrowUpIcon, SearchIcon} from "@chakra-ui/icons";

export function FilterSection() {
    const [orderAsc, setOrderAsc] = useState(true)

    function toggleOrder() {
        setOrderAsc(!orderAsc)
    }

    return (
        <Flex
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            gap={4}
            bg={useColorModeValue("gray.50", "gray.900")}
            p={4}
            mb={4}
            borderRadius='xl'
            boxShadow='md'
        >
            <Box flex='1'>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray' />
                    </InputLeftElement>
                    <Input
                        placeholder='Search...'
                        variant='filled'
                        _focus={{ bg: 'whiteAlpha.100' }}
                    />
                </InputGroup>
            </Box>

            <IconButton
                aria-label='Toggle order'
                icon={<ArrowUpIcon />}
                onClick={toggleOrder}
                variant='ghost'
                title={orderAsc ? 'Ascending' : 'Descending'}
                _hover={{ bg: 'whiteAlpha.200' }}
            />

            <Select placeholder='Sort by' width='180px'>
                <option value={'all'}>All</option>
                <option value={'approved'}>Approved</option>
                <option value='requestApproval'>Request new</option>
                <option value='requestDeletion'>Deletion Requested</option>
            </Select>
        </Flex>
    )
}
