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
import { SkipTransaction, TransactionEntry } from "../components/Transactions/TransactionEntry.tsx";

export function Dashboard() {
    const currUser = '123123';
    const transactions: SkipTransaction[] = [
        {
            id: "1",
            userId: "123123",
            userName: "David",
            title: "Diskrete Mathe 2 Lektione",
            reason: "Absoult kei bock meh gha",
            date: new Date(),
            debtValue: 5.0,
            status: 'approved',
            createdBy: 'David'
        },
        {
            id: "2",
            userId: "888999",
            userName: "Luca",
            title: "Analysis Übung",
            reason: "Znacht isch wichtiger gsi 🍝",
            date: new Date(),
            debtValue: 7.5,
            status: 'pending',
            createdBy: 'David'
        },
    ];

    const totalDebt = transactions.reduce((sum, t) => sum + t.debtValue, 0); //TODO: This will be computed by the backend
    const personalDebt = transactions.reduce((sum, t) => sum + (t.userId === currUser ?  t.debtValue : 0), 0); //TODO: This will be computed by the backend
    const bg = useColorModeValue("gray.50", "gray.900");
    const cardBg = useColorModeValue("gray.100", "gray.800");

    return (
        <Box bg={bg} pt={10} px={{ base: 4, md: 10 }} maxW={'90vw'}>
            <Flex alignItems="center" mb={8} flexDir={{ base: 'column', md: 'row' }}>
                <Heading textAlign={'center'} size="lg" color={useColorModeValue("blue.600", "blue.300")}>
                    Welcome Back {'Username'} 👋
                </Heading>
                <Spacer />
                <Button colorScheme="blue" size="md">
                    + Add New Entry
                </Button>
            </Flex>

            <Flex gap={4} flexDir={{ base: 'column', md: 'row' }} mb={8}>
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

            <Divider mb={6} />

            <VStack spacing={4} align="stretch">
                <Heading as="h2" size="md" color={useColorModeValue("gray.700", "gray.200")}>
                    Recent Skips
                </Heading>
                {transactions.map((transaction: SkipTransaction) => (
                    <TransactionEntry transaction={transaction} key={transaction.id} />
                ))}

                {transactions.length === 0 && (
                    <Text color="gray.500" textAlign="center" py={10}>
                        No Skipping recorded yet. Either you haven't started tracking or yall are actually locked in 🔥🔥🔥
                    </Text>
                )}
            </VStack>
        </Box>
    );
}
