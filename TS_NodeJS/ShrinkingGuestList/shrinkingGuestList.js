var specialGuests = ["Sir Daniyal Nagori", "Sir Zia Khan", "Sir Muhammad Qasim"];
function inviteMessages(forGuest) {
    forGuest.forEach(function (forGuest) {
        var specialMessage = "\nAssalam-o-Alaikum\nDear ".concat(forGuest, ",\n\nI'm writing to extend a warm invitation to you for a dinner gathering at my place.\n\nIt would be an honor to have you join us for an evening filled with delightful conversation and delicious food.\nYour presence would greatly enrich our gathering.\n\nPlease let me know if you are coming to attend.\n\nWarm regards,\nMuhammad Salman Hussain\n\n");
        console.log(specialMessage);
    });
}
console.log("\nOLD MESSAGES:\n");
inviteMessages(specialGuests);
var notComingGuest = specialGuests[0];
console.log("\nUnfortunately ".concat(notComingGuest, " can't come for the dinner."));
specialGuests.shift();
/* Removing first guest */
var newGuest = "ABC/XYZ"; /* Replacing Sir Daniyal Nagori's name with "ABC-XYZ" (None) */
specialGuests[0] = newGuest;
console.log("NEW MESSAGES:\n");
inviteMessages(specialGuests);
console.log("\nI found a bigger dinner table.\n");
specialGuests.unshift("ABC-123");
specialGuests.splice(Math.floor(specialGuests.length / 2), 0, "DEF-456");
specialGuests.push("GHI-789");
/*      DONE with the Help of W3School - Salman    */
console.log("\nUPDATED GUEST LIST AND INVITATION MESSAGES:\n");
inviteMessages(specialGuests);
/*      DONE with the Help of W3School - Salman    */
console.log("\nI can only invite two people for dinner.\n");
while (specialGuests.length > 2) {
    var removedGuest = specialGuests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
console.log("\nInvitations for the two remaining guests:\n");
inviteMessages(specialGuests);
specialGuests.pop();
specialGuests.pop();
console.log("\nThank you\t", specialGuests);
/*  Some Code of this Script is done with help of W3School
    Muhammad Salman Hussain  |  Timings: THUR - 7:00 to 10:00 PM
*/ 
