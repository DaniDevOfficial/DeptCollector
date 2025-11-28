import {Semester, SemesterResponse} from "../../GenericTypes/Semester/Semester.ts";

export function parseSemester(resp: SemesterResponse): Semester {
    return {
        id: resp.id,
        name: resp.name,
        startDate: new Date(resp.startDate),
        endDate: new Date(resp.endDate)
    };
}

export function parseSemesters(responses: SemesterResponse[]): Semester[] {
    return responses.map(parseSemester);
}
