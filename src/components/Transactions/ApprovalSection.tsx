import { Button, Flex, Text, VStack, Badge } from "@chakra-ui/react";
import {SkipTransaction} from "../../Repo/GenericTypes/Transactions/transaction.ts";

interface ApprovalSectionProps {
    transaction: SkipTransaction;
    currentUser: { id: string; name: string };
}

export function ApprovalSection({
                                    transaction,
                                    currentUser,
                                }: ApprovalSectionProps) {
    const { status, approvedBy = [], deletedBy = [], requiredApprovals } = transaction;

    const isCreator = transaction.createdById === currentUser.id;

    const hasApproved = transaction.approvedBy.some(u => u.id === currentUser.id);
    const hasConfirmedDelete = transaction.deletedBy.some(u => u.id === currentUser.id);

    async function onApprove() {

    }

    async function onRequestDelete() {

    }

    async function onConfirmDelete() {

    }

    return (
        <VStack align="stretch" spacing={4} mt={6}>
            {status === "pending" && (
                <Flex direction="column" gap={3}>
                    <Text>
                        🕓 This transaction is waiting for approval.{" "}
                        <Badge colorScheme="yellow">
                            {approvedBy.length}/{requiredApprovals} approved
                        </Badge>
                    </Text>

                    {!isCreator && !hasApproved && (
                        <Button colorScheme="green" onClick={onApprove}>
                            Approve
                        </Button>
                    )}

                    {isCreator && (
                        <Button colorScheme="red" variant="outline" onClick={onRequestDelete}>
                            Cancel Request
                        </Button>
                    )}
                </Flex>
            )}

            {status === "approved" && (
                <Flex direction="column" gap={3}>
                    <Button
                        colorScheme="red"
                        onClick={onRequestDelete}
                    >
                        Request Deletion 🗑️
                    </Button>
                </Flex>
            )}

            {status === "delete_pending" && (
                <Flex direction="column" gap={3}>
                    <Text>
                        🗑️ Deletion is pending approval.{" "}
                        <Badge colorScheme="red">
                            {deletedBy.length}/{requiredApprovals} confirmed
                        </Badge>
                    </Text>

                    {!hasConfirmedDelete && (
                        <Button colorScheme="red" onClick={onConfirmDelete}>
                            Confirm Deletion
                        </Button>
                    )}
                </Flex>
            )}
        </VStack>
    );
}
