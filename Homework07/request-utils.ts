//Create request-utils.ts with at least 6 small, pure, typed functions: id formatting, SLA calculation, overdue check, title validation (5–100 characters), category check against an allowed list, summary text
//id formatting
export function formatRequestId(
    n: number,
    prefix = 'REQ'
): string {
    const formattedNumber = n.toString().padStart(4, '0');
    return `${prefix}-${formattedNumber}`;
}


// SLA calculation
export function slaHours(priority: number): number {
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

//overdue check
export function isOverdue(
    createdHour: number,
    nowHour: number,
    priority: number
): boolean { 
    if (createdHour > nowHour) {
        throw new Error("createdHour cannot be greater than nowHour");
    } 
    const elapsedHours = nowHour - createdHour;  
    return elapsedHours > slaHours(priority);
}


//title validation (5–100 characters)

export function validateTitle(title: string): boolean {
    return title.length >= 5 && title.length <= 100;
}


//category check against an allowed list
export function isValidCategory(category: string, allowedCategories: string[]): boolean {
    return allowedCategories.includes(category);
}

//summary text
export function generateSummary(request: { id: string; title: string; priority: number; status: string }): string {
    return `Request ${request.id}: "${request.title}" with priority ${request.priority} is currently ${request.status}.`;
}