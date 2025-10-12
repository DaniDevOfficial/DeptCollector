import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Text
} from "@chakra-ui/react";
import {SkipTransaction} from "./TransactionEntry.tsx";
import {PillTag} from "../ui/PillTag.tsx";

export function TransactionDrawer({isOpen, onClose, transaction}: {
    isOpen: boolean,
    onClose: () => void,
    transaction: SkipTransaction
}) {

    const isPending = transaction.status === "pending";
    return (
        <>
            <Drawer placement="right" isOpen={isOpen} onClose={onClose} size={'md'}>
                <DrawerOverlay/>
                <DrawerContent p={4} overflowY="auto" width={'100%'}>
                    <DrawerCloseButton/>
                    <DrawerBody>
                        <Flex direction="column" justify="space-between">
                            <DrawerHeader paddingLeft={0}>
                                <Flex
                                    gap={5}
                                    justifyContent="space-between"
                                    flexDir={'row'}
                                >
                                    {transaction.title}
                                    <div>
                                        {transaction.status && (
                                            <PillTag
                                                content={transaction.status}
                                                colorScheme={isPending ? "yellow" : "green"}
                                            />
                                        )}
                                    </div>
                                </Flex>
                            </DrawerHeader>
                            <Text color={'gray.500'}>
                                {transaction.reason}
                            </Text>


                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
