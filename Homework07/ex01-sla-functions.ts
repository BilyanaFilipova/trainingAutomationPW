function slaHours(priority: number): number {
    if (priority === 1) {
        return 4;
    } else if (priority === 2) {
        return 8;
    } else if (priority === 3) {
        return 24;
    } else if (priority === 4) {
        return 48;
    } else {
        throw new Error("Invalid priority");
    }
}

function isOverdue(
    createdHour: number,
    nowHour: number,
    priority: number
): boolean {
    const elapsedHours = nowHour - createdHour;
    return elapsedHours > slaHours(priority);
}

console.log(slaHours(1));
console.log(slaHours(2));
console.log(isOverdue(10, 16, 1));
console.log(isOverdue(10, 12, 1));