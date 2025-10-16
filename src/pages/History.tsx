import {loadTransactions} from "../Repo/transactions/loadTransactions/loadTransactionHandler.ts";
import {useEffect, useState} from "react";
import {SkipTransaction} from "../Repo/GenericTypes/Transactions/transaction.ts";
import {Box, Heading, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import {TransactionEntry} from "../components/Transactions/TransactionEntry.tsx";
import {FilterSection} from "../components/History/FilterSection.tsx";
import {TransactionList} from "../components/Transactions/TransactionList.tsx";

export function History () {

    const [transactions, setTransactions] = useState<SkipTransaction[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchTransactions() {
        setIsLoading(true);
        try {
            const data = await loadTransactions();
            setTransactions(data);
        } catch (error) {
            console.error(error); //TODO: add error handling
        }
        setIsLoading(false);

    }

    useEffect(() => {
        fetchTransactions();
    }, []);
    return (
        <Box w={'100%'}>
            <FilterSection />
            <TransactionList transactions={transactions} isLoading={isLoading} />
        </Box>
    )
}