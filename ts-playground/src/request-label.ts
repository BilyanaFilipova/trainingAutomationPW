const requestId: string = 'REQ-1042';
const priority: string = 'P2';
const title: string = 'Broken street light';
const category: string = 'Lighting';

const requestLabel = `${requestId} [${priority}] ${title} (${category})`;

console.log(requestLabel);
console.log(`Length is ${requestLabel.length}.`);