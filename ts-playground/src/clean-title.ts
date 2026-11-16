const title: string = '   BROKEN Street LIGHT   ';

//take a title with extra spaces and mixed case, print it trimmed
console.log(`Title is timmed: '${title.trim()}'`);


//take a title with extra spaces and mixed case, print it in lower case
console.log(`Title is in lower case: '${title.trim().toLowerCase()}'`);

//take a title with extra spaces and mixed case, print it in upper case
console.log(`Title is in lower case: '${title.trim().toUpperCase()}'`);

// Capitalize the first letter
const newTitle = title.trim().toLowerCase();
const firstLetter = newTitle.slice(0, 1).toUpperCase();
const restOfTitle = newTitle.slice(1);
const capitalizedTitle = firstLetter + restOfTitle;

console.log(capitalizedTitle);

// Check if the title includes a word
console.log(title.includes('Street'));

// Replace a word
console.log(`${title.trim().replace('LIGHT', 'LAMP')}`);