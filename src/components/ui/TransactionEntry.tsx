
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    Badge,
    Spacer, Avatar, HStack,
} from "@chakra-ui/react";

export interface SkipTransaction {
    id: string;
    userId: string;
    title: string;
    userName: string;
    reason: string;
    date: Date;
    debtValue: number;
}

export function TransactionEntry({ transaction }: { transaction: SkipTransaction }) {
    const bg = useColorModeValue("gray.100", "gray.700");
    const textColor = useColorModeValue("gray.800", "gray.100");
    const secondaryText = useColorModeValue("gray.500", "gray.400");

    return (
        <Box
            bg={bg}
            borderRadius="xl"
            p={4}
            shadow="md"
            transition="all 0.2s ease"
            _hover={{ transform: "scale(1.01)", shadow: "lg" }}
        >
            <Flex alignItems="center">

                <Box>
                    <HStack spacing={2} mb={1}>
                        <Avatar
                            size="sm"
                            name={transaction.userName}
                            bg={useColorModeValue("blue.300", "blue.400")}
                        />
                        <Text fontWeight="semibold" fontSize="sm" color={secondaryText}>
                            {transaction.userName}
                        </Text>
                    </HStack>

                    <Text fontWeight="bold" fontSize="lg" color={textColor}>
                        {transaction.title}
                    </Text>
                    <Text fontSize="sm" color={secondaryText}>
                        {transaction.reason}
                    </Text>
                </Box>

                <Spacer />

                <Box textAlign="right">
                    <Badge
                        colorScheme="blue"
                        fontSize="0.9em"
                        p={2}
                        borderRadius="md"
                        variant="solid"
                    >
                        +{transaction.debtValue.toFixed(2)} CHF
                    </Badge>
                    <Text fontSize="xs" color={secondaryText}>
                        {transaction.date.toLocaleDateString()} : {transaction.date.toLocaleTimeString()}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}
