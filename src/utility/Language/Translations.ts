import {TransactionStatus} from '../../components/Transactions/TransactionEntry.tsx';

export function getTransactionStatusText(status: TransactionStatus) {
    switch (status) {
        case 'approved':
            return 'Approved';
        case 'pending_approval':
            return 'Pending Approval';
        case 'pending_delete':
            return 'Delete Requested';
        default:
            return 'Unknown';
    }
}

export function getTransactionStatusColor(status: TransactionStatus) {
    switch (status) {
        case 'approved':
            return 'green';
        case 'pending_approval':
            return 'yellow';
        case 'pending_delete':
            return 'red';
        default:
            return 'blue';
    }
}