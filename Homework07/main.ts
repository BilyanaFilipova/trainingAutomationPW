

import {
    formatRequestId,
    slaHours,
    isOverdue,
    validateTitle,
    isValidCategory,
    generateSummary
} from './request-utils';   

type ServiceRequest = {
    id: number;
    title: string;
    priority: number;
    category: string;
    status: string;
    createdHour: number;
};

const requests: ServiceRequest[] = [
    {
        id: 1,
        title: 'Broken street light',
        priority: 1,
        category: 'Lighting',
        status: 'Open',
        createdHour: 10
    },
    {
        id: 2,
        title: 'Damaged road',
        priority: 3,
        category: 'Roads',
        status: 'Closed',
        createdHour: 5
    },
    {
        id: 3,
        title: 'Test',
        priority: 2,
        category: 'Lighting',
        status: 'Open',
        createdHour: 8
    },
    {
        id: 4,
        title: 'Water supply problem',
        priority: 2,
        category: 'Water',
        status: 'Pending',
        createdHour: 15
    },
    {
        id: 5,
        title: 'Damaged traffic sign',
        priority: 3,
        category: 'Unknown',
        status: 'Open',
        createdHour: 2
    },
    {
        id: 6,
        title: 'Overflowing waste container',
        priority: 4,
        category: 'Waste',
        status: 'Open',
        createdHour: 12
    },
    {
        id: 7,
        title: 'Street light not working',
        priority: 1,
        category: 'Lighting',
        status: 'Pending',
        createdHour: 16
    },
    {
        id: 8,
        title: 'Pothole on main road',
        priority: 2,
        category: 'Roads',
        status: 'Open',
        createdHour: 11
    }
];


const allowedCategories: string[] = [
    'Lighting',
    'Roads',
    'Water',
    'Waste'
];

const nowHour: number = 20;

for (const request of requests) {
    const formattedId = formatRequestId(request.id);
    console.log(formattedId);
    const sla = slaHours(request.priority);
    console.log(`SLA for priority ${request.priority}: ${sla} hours`);
    const overdue = isOverdue(request.createdHour, nowHour, request.priority);
    console.log(`Request ${formattedId} is ${overdue ? '' : 'not '}overdue`);
    const isTitleValid = validateTitle(request.title);
    console.log(`Title "${request.title}" is ${isTitleValid ? 'valid' : 'invalid'}`);
    const isCategoryValid = isValidCategory(request.category, allowedCategories);
    console.log(`Category "${request.category}" is ${isCategoryValid ? 'valid' : 'invalid'}`);
    const summary = generateSummary({
        id: formattedId,
        title: request.title,
        priority: request.priority,
        status: request.status
    });
    console.log(summary);
    console.log('----------------------------------------');
}