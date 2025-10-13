import {User} from "../../user.ts";

export type TransactionStatus =
    | "pending"
    | "approved"
    | "delete_pending";

export interface SkipTransaction {
    id: string;
    userId: string;
    userName: string;

    title: string;
    reason: string;
    date: Date;
    debtValue: number;

    status: TransactionStatus;

    createdByName: string;
    createdById: string;
    createdAt: string;

    approvedBy: User[];
    deletedBy: User[];
    requiredApprovals: number;

    deletedAt?: string;
}
