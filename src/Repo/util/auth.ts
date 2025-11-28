import {FRONTEND_ERRORS, UnauthorizedError} from "./error.ts";

const AUTH_TOKEN_STRING = 'authToken';
const REFRESH_TOKEN_STRING = 'refreshToken';


export function handleAuthorisationKeysFromHeader(header: Headers) {
    const authToken = header.get('Authorization');
    const refreshToken = header.get('RefreshToken');

    if (authToken !== null) {
        saveAuthToken(authToken);
    }
    if (refreshToken !== null) {
        saveRefreshToken(refreshToken)
    }
}


export async function getBasicAuthHeader(): Promise<SimpleAuthHeaderWithJson> {
    const refreshToken = getRefreshToken();
    const authToken = getAuthToken() ?? '';
    if (!refreshToken) {
        throw new UnauthorizedError(FRONTEND_ERRORS.UNAUTHORIZED_ERROR);
    }
    return {
        RefreshToken: refreshToken,
        Authorization: authToken,
        'Content-Type': 'application/json',
    };
}

export interface SimpleAuthHeaderWithJson extends Record<string, string> {
    RefreshToken: string;
    Authorization: string;
    'Content-Type': string;
}

type JWTPayload = {
    UserId: string;
    Username: string;
    Exp: number;
};

function decodeJwt(token: string): JWTPayload | null {
    try {
        const parts = token.split(".");

        if (parts.length !== 3) {
            return null
        }

        const payload = parts[1];
        return JSON.parse(atob(payload));
    } catch (error) {
        return null;
    }
}


// GET
export function getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_STRING);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_STRING);
}


export async function GetCurrentUserId(): Promise<string | null> {
    const authToken = getRefreshToken();
    if (!authToken) {
        return null;
    }
    const payload = decodeJwt(authToken);
    return payload?.UserId || null;
}

export async function GetSafeCurrentUserId(): Promise<string> {
    const userId = await GetCurrentUserId();
    if (!userId) {
        throw new UnauthorizedError(FRONTEND_ERRORS.UNAUTHORIZED_ERROR);
    }
    return userId;
}

// SAVE
export function saveAuthToken(value: string) {
    localStorage.setItem(AUTH_TOKEN_STRING, value);
}

export function saveRefreshToken(value: string) {
    localStorage.setItem(REFRESH_TOKEN_STRING, value);
}

// DELETE
export function removeAuthToken() {
    localStorage.removeItem(AUTH_TOKEN_STRING);
}

export function removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_STRING);
}