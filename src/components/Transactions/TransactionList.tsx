import {HStack, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, VStack} from "@chakra-ui/react";
import {SkipTransaction} from "../../Repo/GenericTypes/Transactions/transaction.ts";
import {TransactionEntry} from "./TransactionEntry.tsx";

export function TransactionList({transactions, isLoading}: { transactions: SkipTransaction[], isLoading: boolean }) {

    const amountOfSkeletons = 10;
    if (isLoading) {
        return (
            <>
                <VStack spacing={4} overflowY={'auto'} h={'80vh'} w={'100%'}>
                    {[...Array(amountOfSkeletons)].map((_, i) => (
                        <Skeleton key={i} height='200px' width='90%' borderRadius='lg'/>
                    ))}
                </VStack>
            </>
        )
    }

    return (
        <>
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
        </>
    )
}