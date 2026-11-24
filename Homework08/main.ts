import { TestDataFactory } from './test-data-factory';

const factory = new TestDataFactory();

// Test 1 - Create two valid requests
const request1 = factory.validRequest();
const request2 = factory.validRequest();

console.log(request1);
console.log(request2);

// Test 2 - Verify that each request is a fresh object
console.log(request1 !== request2); // true

console.log(
    request1.requestDetails !== request2.requestDetails
); // true

// Test 3 - Verify overrides
const customRequest = factory.validRequest({
    requestDetails: {
        ...request1.requestDetails,
        title: 'Damaged road',
        priority: 'HIGH'
    }
});

console.log(customRequest.requestDetails.title); // Damaged road
console.log(customRequest.requestDetails.priority); // HIGH

// Test 4 - Verify that the original request is unchanged
console.log(request1.requestDetails.title); // Broken street light
console.log(request1.requestDetails.priority); // MEDIUM

// Test 5 - Verify unique titles
console.log(factory.uniqueTitle());
console.log(factory.uniqueTitle());
console.log(factory.uniqueTitle());