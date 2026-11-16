const name = 'Maria';
const sessions = 36;

console.log('Hello, ' + name);
console.log(`Welcome ${name}, the programme has ${sessions} sessions`);
console.table([{ id: 1, status: 'Submitted' }]);


//Declare variables for a service request: id, title, category, priority (1–5), isUrgent, assignee (may be empty).
const id = 'REQ-1042';
const title = 'Broken street light';
const category = 'Lighting';
const priority = 2;
const isUrgent = true;
const assignee = '';

//Print a summary line with a template literal: REQ-1042 [P2] Broken street light (Lighting)
console.log(`${id} [P${priority}] ${title} (${category})`);

//Convert the text "REQ-1042" to the number 1042 and back to "REQ-1043"
const requestNumber = Number(id.slice(4));

console.log(requestNumber); // 1042

const nextRequestId = `REQ-${requestNumber + 1}`;

console.log(nextRequestId); // REQ-1043

//Given a due date in days and hours, print the total hours and the full days left
const dueDays = 3;
const dueHours = 6;

const totalHours = dueDays * 24 + dueHours;
const fullDaysLeft = Math.floor(totalHours / 24);

console.log(totalHours);
console.log(fullDaysLeft);