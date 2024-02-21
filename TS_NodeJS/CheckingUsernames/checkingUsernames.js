var currentUsers = ["Salman", "Muhammad Salman Hussain", "Salman Hussain", "Salman Sheikh", "nouser-John"];
var newUsers = ["Muhammad Salman Hussain", "MSHSheikh", "Salman Sheikh", "M. Salman Hussain", "NOUSER-JOHN"];
var _loop_1 = function (newUser) {
    var isExisting = currentUsers.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); });
    var message = isExisting ? "Please enter a new username."
        :
            "Username is available.";
    console.log("\"".concat(newUser, "\" - ").concat(message));
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
