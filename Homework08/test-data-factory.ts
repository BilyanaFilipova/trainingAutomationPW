import type { NewRequest } from './request-types';

export class TestDataFactory {
    private static counter = 0;

    uniqueTitle(): string {
        TestDataFactory.counter++;
        return `Request-${TestDataFactory.counter}`;
    }

    validRequest(overrides?: Partial<NewRequest>): NewRequest {

        const defaultRequest: NewRequest = {
            requestDetails: {
                title: 'Broken street light',
                description: 'The street light is not working and needs repair.',
                category: 'roads-and-infrastructure',
                priority: 'MEDIUM',
                dateOfRequest: new Date(),
                isEmergency: false
            },
            location: {
                streetAddress: '10 Main Street',
                city: 'Sofia',
                postalCode: '1000',
                locationText: 'Next to the bus stop'
            },
            contactDetails: {
                contactMethod: 'EMAIL',
                email: 'test@example.com',
                phone: '0888000000'
            },
            agreesToTerms: true
        };

        return {
            ...defaultRequest,
            ...structuredClone(overrides ?? {})
        };
    }
}