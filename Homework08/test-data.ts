import type { NewRequest } from './request-types';

//1st valid test data object - Standard request
export const validRequest1: NewRequest = {
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


//2nd valid test data object - Emergency Request
export const validRequest2: NewRequest = {
    requestDetails: {
        title: 'Dangerous road damage',
        description: 'A large pothole on the main road requires urgent repair.',
        category: 'roads-and-infrastructure',
        priority: 'URGENT',
        dateOfRequest: new Date(),
        isEmergency: true,
        severity: 9,
        isRecurring: true
    },
    location: {
        streetAddress: '25 Main Street',
        city: 'Sofia',
        postalCode: '1000',
        locationText: 'Near the main intersection',
        latitude: 42.6977,
        longitude: 23.3219
    },
    contactDetails: {
        contactMethod: 'PHONE',
        phone: '0888000001',
        wantsUpdates: true
    },
    agreesToTerms: true
};

//3rd valid test data object - Request with attachments
export const validRequest3: NewRequest = {
    requestDetails: {
        title: 'Damaged pavement',
        description: 'The pavement is damaged and needs to be repaired.',
        category: 'roads-and-infrastructure',
        priority: 'LOW',
        dateOfRequest: new Date(),
        isEmergency: false
    },
    location: {
        streetAddress: '15 Park Street',
        city: 'Sofia',
        postalCode: '1000',
        locationText: 'Near the park entrance'
    },
    contactDetails: {
        contactMethod: 'EMAIL',
        email: 'test3@example.com',
        phone: '0888000002',
        affectedServices: ['Garbage Collection', 'Internet/Cable']
    },
    attachments: [
        {
            fileName: 'pavement.jpg',
            fileType: 'image/jpeg',
            fileSize: 102400
        }
    ],
    agreesToTerms: true
};

// Invalid Request 1 - Missing required field
// Invalid because the required title field is missing.

export const invalidRequest1 = {
    ...validRequest1,
    requestDetails: {
        description: 'The street light is not working and needs repair.',
        category: 'roads-and-infrastructure',
        priority: 'MEDIUM',
        dateOfRequest: new Date(),
        isEmergency: false
    }
};

// Invalid Request 2 - Invalid priority
// Invalid because CRITICAL is not an allowed priority value.

export const invalidRequest2 = {
    ...validRequest1,
    requestDetails: {
        ...validRequest1.requestDetails,
        priority: 'CRITICAL'
    }
};

// Invalid Request 3 - Terms not accepted
// Invalid because the user has not accepted the terms and conditions.

export const invalidRequest3: NewRequest = {
    ...validRequest1,
       agreesToTerms: false
};