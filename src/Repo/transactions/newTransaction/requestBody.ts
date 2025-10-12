
export interface NewTransactionRequestBody {
    userId: string;
    title: string;
    reason: string;
    date: Date;
    debtValue: number;
}