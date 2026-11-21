function formatRequestId(n: number, prefix = 'REQ') : string {
    const formattedNumber = n.toString().padStart(4, '0');
    return `${prefix}-${formattedNumber}`;
}

console.log(formatRequestId(42));        // REQ-0042
console.log(formatRequestId(85, 'INC')); // INC-0085
console.log(formatRequestId(1234));      // REQ-1234
console.log(formatRequestId(12345));     // REQ-12345
console.log(formatRequestId(0));         // REQ-0000