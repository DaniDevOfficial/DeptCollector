export class UnauthorizedError extends Error {
    constructor(message: any) {
        super(message);
        this.name = 'UnauthorizedError';
    }
}

export class BadRequestError extends Error {
    constructor(message: any) {
        super(message);
        this.name = 'BadRequestError';
    }
}

export class InternalServerError extends Error {
    constructor(message: any) {
        super(message);
        this.name = 'InternalServerError';
    }
}

export class DoNothingError extends Error {
    constructor(message: any) {
        super(message);
        this.name = 'InternalServerError';
    }
}

export class ForbiddenError extends Error {
    constructor(message: any) {
        super(message);
        this.name = 'ForbiddenError';
    }
}

export class NotFoundError extends Error {
    constructor(message: any) {
        super(message);
        this.name = 'NotFoundError';
    }
}

export class IsOfflineError extends Error {
    constructor(message: any) {
        super(message);
        this.name = 'IsOfflineError';
    }
}

export class TimeoutError extends Error {
    constructor(message: any) {
        super(message);
        this.name = 'TimeoutError';
    }
}


export const FRONTEND_ERRORS = {
    // Generic Errors
    UNAUTHORIZED_ERROR: "unauthorizedError",
    FORBIDDEN_ERROR: "forbiddenError",
    NOT_FOUND_ERROR: "notFoundError",
    INTERNAL_SERVER_ERROR: "internalServerError",
    BAD_REQUEST_ERROR: "badRequestError",

    UNKNOWN_ERROR: "unknownError",
}