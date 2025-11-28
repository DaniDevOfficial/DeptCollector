import {User} from "../../user.ts";

export interface SkipTransaction {
    id: string;
    userId: string;
    userName: string;

    title: string;
    reason: string;
    date: Date;
    debtValue: number;

    createdByName: string;
    createdById: string;
    createdAt: string;

    approvedBy: User[];
    deletedBy: User[];
    requiredApprovals: number;

    deletedAt?: string;
}
