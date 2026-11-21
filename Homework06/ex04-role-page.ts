const roles = ["Admin", "Editor", "Viewer"];

const pages = ["Dashboard", "Users", "Reports", "Settings"];

for (const role of roles) {
    for (const page of pages) {
        console.log(`${role} → ${page}`);
    }
}