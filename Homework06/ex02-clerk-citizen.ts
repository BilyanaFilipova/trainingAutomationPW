for (let i = 1; i <= 100; i++) {
  
    const a = i % 3 === 0 && i % 5 === 0;
    if (a) {        
        console.log("Supervisor");
    }
    else if (i % 3 === 0) {
        console.log("Clerk");
    }
    else if (i % 5 === 0) {
        console.log("Citizen");
    }
    else { 
        console.log(`${i}`);
    }
    
}