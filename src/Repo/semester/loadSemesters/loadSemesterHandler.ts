import {getBasicAuthHeader} from "../../util/auth.ts";
import {handleDefaultResponseAndHeaders} from "../../util/responses.ts";
import {parseSemesters} from "./parser.ts";
import {Semester} from "../../GenericTypes/Semester/Semester.ts";

async function loadSemesterHandler(): Promise<Semester[]> {
    const url = process.env.EXPO_PUBLIC_API_URL + 'semester/all';
    const fetchPromise = fetch(url, {
        method: 'GET',
        headers: await getBasicAuthHeader(),
    });

    const res: Response = await fetchPromise;
    await handleDefaultResponseAndHeaders(res)
    return parseSemesters(await res.json());
}
