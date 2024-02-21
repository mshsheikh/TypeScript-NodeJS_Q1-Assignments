let usernames: string[] = ["admin", "admin", "Salman", "Sheikh", "user3", "user4"];

if (usernames.length === 0)
{
    console.log("We need to find some users!");
}

else
{
    for (let username of usernames)
    {
        console.log(username === "admin" ?
        "Hello admin, would you like to see a status report?"
        :
        `Hello ${username}, thank you for logging in again.`);
    }
}