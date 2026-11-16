//Given durationMs, print fast below 1000, ok from 1000 up to and including 3000, and slow above 3000. 
let durationMs = 800;

if (durationMs < 1000) {
  console.log('The Duration is fast');
} else if (durationMs <= 3000) {
  console.log('The Duration is OK');
} else {
  console.log('The Duration is slow');
}

durationMs = 1000

if (durationMs < 1000) {
  console.log('The Duration is fast');
} else if (durationMs <= 3000) {
  console.log('The Duration is OK');
} else {
  console.log('The Duration is slow');
}


durationMs = 3000

if (durationMs < 1000) {
  console.log('The Duration is fast');
} else if (durationMs <= 3000) {
  console.log('The Duration is OK');
} else {
  console.log('The Duration is slow');
}


durationMs = 3001

if (durationMs < 1000) {
  console.log('The Duration is fast');
} else if (durationMs <= 3000) {
  console.log('The Duration is OK');
} else {
  console.log('The Duration is slow');
}


// Then write a switch on a status variable that prints PASS, FAIL or SKIP, and UNKNOWN for anything else.
let varStatus = 'passed';

switch (varStatus) {
  case 'passed':
    console.log('PASS')
    break;

  case 'failed':
    console.log('FAIL')
    break;

  case 'skipped':
    console.log('SKIP')
    break;

  default:
    console.log('UNKNOWN');
    
}

varStatus='failed';
switch (varStatus) {
  case 'passed':
    console.log('PASS')
    break;

  case 'failed':
    console.log('FAIL')
    break;

  case 'skipped':
    console.log('SKIP')
    break;

  default:
    console.log('UNKNOWN');
    
}

varStatus='pending';
switch (varStatus) {
  case 'passed':
    console.log('PASS')
    break;

  case 'failed':
    console.log('FAIL')
    break;

  case 'skipped':
    console.log('SKIP')
    break;

  default:
    console.log('UNKNOWN');
    
}

