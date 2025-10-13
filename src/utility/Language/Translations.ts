import {TransactionStatus} from "../../Repo/GenericTypes/Transactions/transaction.ts";

export function getTransactionStatusText(status: TransactionStatus) {
    switch (status) {
        case 'approved':
            return 'Approved';
        case 'pending':
            return 'Pending Approval';
        case 'delete_pending':
            return 'Deletion Requested';
        default:
            return 'Unknown';
    }
}

export function getTransactionStatusColor(status: TransactionStatus) {
    switch (status) {
        case 'approved':
            return 'green';
        case 'pending':
            return 'yellow';
        case 'delete_pending':
            return 'red';
        default:
            return 'blue';
    }
}