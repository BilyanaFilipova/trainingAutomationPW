const statuses: string[] = ['open', 'closed', 'pending', 'closed'];

function removeStatus(statuses: string[], status: string): string[] {
    return statuses.filter((s) => s !== status);
}

console.log(removeStatus(statuses, 'closed')); // ['open', 'pending']
console.log(statuses); //[ 'open', 'closed', 'pending', 'closed' ]