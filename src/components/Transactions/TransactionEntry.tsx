import {Avatar, Badge, Box, Flex, HStack, Spacer, Text, useColorModeValue, VStack,} from "@chakra-ui/react";
import {PillTag} from "../ui/PillTag.tsx";
import {TransactionDrawer} from "./TransactionDrawer.tsx";
import {useDisclosure} from "@chakra-ui/icons";
import {getTransactionStatusColor, getTransactionStatusText} from "../../utility/Language/Translations.ts";
import {SkipTransaction} from "../../Repo/GenericTypes/Transactions/transaction.ts";

export function TransactionEntry({transaction}: { transaction: SkipTransaction }) {
    const bg = useColorModeValue("gray.100", "gray.700");
    const textColor = useColorModeValue("gray.800", "gray.100");
    const secondaryText = useColorModeValue("gray.500", "gray.400");
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box
                cursor="pointer"
                onClick={onOpen}
                bg={bg}
                borderRadius="xl"
                p={4}
                shadow="md"
                transition="all 0.2s ease"
                w={'90%'}
                _hover={{transform: "scale(1.01)", shadow: "lg"}}
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

                    <Spacer/>

                    <VStack
                        justifyContent="space-between"
                        alignItems="flex-end"
                    >
                        <PillTag content={getTransactionStatusText(transaction.status)} colorScheme={getTransactionStatusColor(transaction.status)} />
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
                    </VStack>
                </Flex>

            </Box>
            <TransactionDrawer isOpen={isOpen} onClose={onClose} transaction={transaction} />
        </>
    );
}
