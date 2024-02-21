var usernames = ["admin", "admin", "Salman", "Sheikh", "user3", "user4"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        console.log(username === "admin" ?
            "Hello admin, would you like to see a status report?"
            :
                "Hello ".concat(username, ", thank you for logging in again."));
    }
}
