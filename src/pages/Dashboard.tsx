import { SkipTransaction, TransactionEntry } from "../components/ui/TransactionEntry.tsx";
import { VStack } from "@chakra-ui/react";

export function Dashboard() {

    const transactions: SkipTransaction[] = [
        {
            id: "1",
            userId: "123123",
            userName: "David",
            title: "Diskrete Mathe 2 Lektione",
            reason: "Absoult kei bock meh gha",
            date: new Date(),
            debtValue: 5.0,
        },
    ];

    return (
        <VStack spacing={4} align="stretch" p={4}>
            {transactions.map((transaction: SkipTransaction) => (
                <TransactionEntry transaction={transaction} key={transaction.id} />
            ))}
        </VStack>
    );
}
