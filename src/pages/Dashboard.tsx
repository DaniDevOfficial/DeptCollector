import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Divider,
    Button,
    useColorModeValue,
    Spacer,
    Stat,
    StatLabel,
    StatNumber,
    SimpleGrid,
} from "@chakra-ui/react";
import {TransactionEntry} from "../components/Transactions/TransactionEntry.tsx";
import {NewTransactionModal} from "../components/Transactions/NewTransactionModal.tsx";
import {useDisclosure} from "@chakra-ui/icons";
import {SkipTransaction} from "../Repo/GenericTypes/Transactions/transaction.ts";
import {useEffect, useState} from "react";
import {loadTransactions} from "../Repo/transactions/loadTransactions/loadTransactionHandler.ts";
import {TransactionList} from "../components/Transactions/TransactionList.tsx";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

export function Dashboard() {
    const currUser = '123123';
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState<SkipTransaction[]>([]);

    async function fetchTransactions() {
        setLoading(true);
        try {
            const data = await loadTransactions();
            setTransactions(data);
        } catch (error) {
            console.error(error); //TODO: add error handling
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    const totalDebt = transactions.reduce((sum, t) => sum + t.debtValue, 0); //TODO: This will be computed by the backend
    const personalDebt = transactions.reduce((sum, t) => sum + (t.userId === currUser ? t.debtValue : 0), 0); //TODO: This will be computed by the backend
    const bg = useColorModeValue("gray.50", "gray.900");
    const cardBg = useColorModeValue("gray.100", "gray.800");
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Box bg={bg} pt={10} px={{base: 4, md: 10}} maxW={'90vw'} justifyContent={'center'} py={10}>
                <Flex alignItems="center" mb={8} flexDir={{base: 'column', md: 'row'}}>
                    <Heading textAlign={'center'} size="lg" color={useColorModeValue("blue.600", "blue.300")}>
                        Welcome Back {'Username'} 👋
                    </Heading>
                    <Spacer/>
                    <Button
                        colorScheme="blue"
                        size="md"
                        onClick={onOpen}
                    >
                        + Add New Entry
                    </Button>
                </Flex>

                <Flex gap={4} flexDir={{base: 'column', md: 'row'}} mb={8}>
                    <Stat bg={cardBg} p={5} borderRadius="xl" shadow="md">
                        <StatLabel>Total Current Group Debt</StatLabel>
                        <StatNumber>{totalDebt.toFixed(2)} CHF</StatNumber>
                    </Stat>

                    <Stat bg={cardBg} p={5} borderRadius="xl" shadow="md">
                        <StatLabel>Total Entires</StatLabel>
                        <StatNumber>{transactions.length}</StatNumber>
                    </Stat>

                    <Stat bg={cardBg} p={5} borderRadius="xl" shadow="md">
                        <StatLabel>Personal Debt</StatLabel>
                        <StatNumber>{personalDebt.toFixed(2)} CHF</StatNumber>
                    </Stat>
                </Flex>

                <Divider mb={6}/>

                <VStack spacing={4} align="stretch" alignItems={'center'}>
                    <Heading as="h2" size="md" color={useColorModeValue("gray.700", "gray.200")}>
                        Recent Skips
                    </Heading>
                    <TransactionList transactions={transactions} isLoading={loading}/>
                </VStack>
            </Box>
            <NewTransactionModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </>

    );
}
