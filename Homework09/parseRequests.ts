// Parse requests from JSON
import { readFileSync } from 'node:fs';

interface ServiceRequest {
    id: number;
    title: string;
    category: string;
    priority: number;
}

class InvalidIdError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidIdError';
    }
}

class InvalidTitleError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidTitleError';
    }
}

class InvalidPriorityError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidPriorityError';
    }
}

class InvalidCategoryError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidCategoryError';
    }
}

function validateRequest(request: unknown): void {

    // Validate ID
    if (
        typeof request !== 'object' ||
        request === null ||
        !('id' in request) ||
        typeof request.id !== 'number'
    ) {
        throw new InvalidIdError('ИД must be a number');
    }

    // Validate title
    if (
        !('title' in request) ||
        typeof request.title !== 'string' ||
        request.title.trim() === ''
    ) {
        throw new InvalidTitleError('Title must not be empty');
    }

    // Validate priority
    if (
        !('priority' in request) ||
        typeof request.priority !== 'number' ||
        !Number.isInteger(request.priority) ||
        request.priority < 1 ||
        request.priority > 5
    ) {
        throw new InvalidPriorityError('Priority must be an integer between 1 and 5');
   }

   // Validate category
if (
    !('category' in request) ||
    typeof request.category !== 'string' ||
    request.category.trim() === ''
) {
    throw new InvalidCategoryError('Category must not be empty');
}
   }

const fileContent = readFileSync('Homework09/requests.json', 'utf8');

const requests: unknown = JSON.parse(fileContent);

if (Array.isArray(requests)) {
    for (const request of requests) {
        try {
            validateRequest(request);
            console.log('Valid рикуест');
        } catch (error) {
            console.log('Invalid request:', request);
            console.log(error);
        }
    }
}

console.log('Validation completed');