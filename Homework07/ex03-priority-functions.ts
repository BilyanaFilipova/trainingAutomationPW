const priorities: number[] = [3, 1, 5, 2, 1];

function countUrgent(priorities: number[]): number {
    let urgentCount = 0;
    for (const priority of priorities) {
        if (priority <= 2) {
            urgentCount++;
        }
    }
    return urgentCount;
}

function highestPriority(priorities: number[]): number {
    const highest = Math.min(...priorities);
    
    return highest;
}

function sortedPriorities(priorities: number[]): number[] {
    const sort = [...priorities].sort((a, b) => a - b);
    return sort;
}

console.log(countUrgent(priorities));
console.log(highestPriority(priorities));
console.log(sortedPriorities(priorities));
console.log(priorities);