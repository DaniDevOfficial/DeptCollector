export interface SemesterResponse {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    updatedAt: string;
    createdAt: string;
}

export interface Semester {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
}