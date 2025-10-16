import {loadTransactions} from "../Repo/transactions/loadTransactions/loadTransactionHandler.ts";
import {useEffect, useState} from "react";
import {SkipTransaction} from "../Repo/GenericTypes/Transactions/transaction.ts";
import {Box, Heading, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import {TransactionEntry} from "../components/Transactions/TransactionEntry.tsx";
import {FilterSection} from "../components/History/FilterSection.tsx";

export function History () {

    const [transactions, setTransactions] = useState<SkipTransaction[]>([]);

    async function fetchTransactions() {
        try {
            const data = await loadTransactions();
            setTransactions(data);
        } catch (error) {
            console.error(error); //TODO: add error handling
        }
    }

    useEffect(() => {
        fetchTransactions();
    }, []);
    return (
        <Box w={'100%'}>
            <FilterSection />
            <VStack spacing={4} overflowY={'auto'} h={'80vh'} w={'100%'}>

                {transactions.map((transaction: SkipTransaction) => (
                    <TransactionEntry transaction={transaction} key={transaction.id}/>
                ))}

                {transactions.length === 0 && (
                    <Text color="gray.500" textAlign="center" py={10}>
                        No Skipping recorded yet. Either you haven't started tracking or yall are actually locked in
                        🔥🔥🔥
                    </Text>
                )}
            </VStack>
        </Box>
    )
}