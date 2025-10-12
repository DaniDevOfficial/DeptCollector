import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    FormControl,
    FormLabel,
    Input,
    Select, VStack,
} from '@chakra-ui/react';
import { getUsers, User } from '../../Repo/user.ts';
import { useEffect, useState } from 'react';
import {createNewTransaction} from '../../Repo/transactions/newTransaction/newTransaction.ts';
import {NewTransactionRequestBody} from '../../Repo/transactions/newTransaction/requestBody.ts';

export function NewTransactionModal({
                                        isOpen,
                                        onClose,
                                    }: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}) {
    const [userDropdownData, setUserDropdownData] = useState<User[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [reason, setReason] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    useEffect(() => {
        async function getUserData() {
            const data = await getUsers();
            setUserDropdownData(data);
        }
        getUserData();
    }, []);

    async function handleSave() {
        if (!selectedUserId || !amount || !title || !reason || !date) {
            alert('All fields have to be filled out');
            return;
        }

        const transaction: NewTransactionRequestBody = {
            userId: selectedUserId,
            title,
            reason,
            date: new Date(date),
            debtValue: parseFloat(amount),
        };

        try {
            await createNewTransaction(transaction);
            console.log('🪙 New Transaction Created:', transaction);
            onClose();
        } catch (error) {
            console.error('error creating transaction:', error);
            alert('error creating transaction');
        }
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Transaction 💸</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4} align="stretch">
                        <FormControl>
                            <FormLabel>User</FormLabel>
                            <Select
                                placeholder="Select user"
                                value={selectedUserId}
                                onChange={(e) => setSelectedUserId(e.target.value)}
                            >
                                {userDropdownData.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Reason</FormLabel>
                            <Input
                                placeholder="Enter reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <Input
                                value={date}
                                type="datetime-local"
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Amount</FormLabel>
                            <Input
                                type="number"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </FormControl>
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleSave}>
                        Save
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
