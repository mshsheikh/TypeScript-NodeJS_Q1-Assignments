const currentUsers: string[] = 
        ["Salman", "Muhammad Salman Hussain", "Salman Hussain", "Salman Sheikh", "nouser-John"];

const newUsers: string[] = 
        ["Muhammad Salman Hussain", "MSHSheikh", "Salman Sheikh", "M. Salman Hussain", "NOUSER-JOHN"];

for (const newUser of newUsers)
    {
    const isExisting = currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase());

    const message = isExisting ? "Please enter a new username."
    :
    "Username is available.";

    console.log(`"${newUser}" - ${message}`);
    }