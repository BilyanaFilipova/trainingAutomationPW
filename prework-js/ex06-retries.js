
//With a for loop print Run 1 of 5 … Run 5 of 5.
for (let i = 1; i <= 5; i++) {
  console.log(`Run ${i} of 5`);
}

//With a while loop simulate retries: the test passes on attempt 4.
let attempt = 1;
while (attempt <= 5) {
  const ok = attempt === 4;
  console.log(`Attempt ${attempt}:`, ok);
  if (ok) {
    break;  
  }
  attempt++;

}
