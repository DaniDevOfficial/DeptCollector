import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Text,
    Button,
    Divider,
    Box,
    useToast
} from "@chakra-ui/react";
import {PillTag} from "../ui/PillTag.tsx";
import {getTransactionStatusColor, getTransactionStatusText} from "../../utility/Language/Translations.ts";
import {SkipTransaction} from "../../Repo/GenericTypes/Transactions/transaction.ts";
import {ApprovalSection} from "./ApprovalSection.tsx";

export function TransactionDrawer({
                                      isOpen,
                                      onClose,
                                      transaction
                                  }: {
    isOpen: boolean;
    onClose: () => void;
    transaction: SkipTransaction;
}) {

    return (
        <Drawer placement="right" isOpen={isOpen} onClose={onClose} size="md">
            <DrawerOverlay/>
            <DrawerContent p={6} overflowY="auto">
                <DrawerCloseButton/>
                <DrawerHeader pb={2} borderBottom="1px solid" borderColor="gray.100">
                    <Flex justify="space-between" align="center">
                        <Text fontSize="xl" fontWeight="bold">
                            {transaction.title}
                        </Text>
                        {transaction.status && (
                            <PillTag
                                content={getTransactionStatusText(transaction.status)}
                                colorScheme={getTransactionStatusColor(transaction.status)}
                            />
                        )}
                    </Flex>
                </DrawerHeader>

                <DrawerBody>
                    <Flex direction="column" gap={6} mt={4}>
                        <Box>
                            <Text fontSize="sm" color="gray.500">
                                Reason
                            </Text>
                            <Text>{transaction.reason}</Text>
                        </Box>

                        <Divider/>

                        <Box>
                            <Text fontSize="sm" color="gray.500">
                                User
                            </Text>
                            <Text fontWeight="medium">{transaction.userName}</Text>
                        </Box>

                        <Divider/>

                        <Box>
                            <Text fontSize="sm" color="gray.500">
                                Amount
                            </Text>
                            <Text fontWeight="bold" color="blue.500">
                                ${transaction.debtValue.toFixed(2)}
                            </Text>
                        </Box>

                        <Divider/>

                        <Box>
                            <Text fontSize="sm" color="gray.500">
                                Date
                            </Text>
                            <Text>
                                {new Date(transaction.date).toLocaleString()}
                            </Text>
                        </Box>

                        <Box>
                            <Text fontSize="sm" color="gray.500">
                                Created by
                            </Text>
                            <Text>{transaction.createdByName}</Text>
                        </Box>

                    </Flex>

                    <ApprovalSection
                        transaction={transaction}
                        currentUser={{id: '123123', name: 'David'}}
                    />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
