/*

I'm Muhammad Salman Hussain,
and all of the codes in TS_NodeJS folder is 100% my own struggle :`)

*/
var specialGuests = ["Sir Daniyal Nagori", "Sir Zia Khan", "Sir Muhammad Qasim"];
function inviteMessages(forGuest) {
    forGuest.forEach(function (forGuest) {
        /* The above code is for modifying my old message for new guest list */
        var specialMessage = "\nAssalam-o-Alaikum\n        Dear ".concat(forGuest, ",\n\n        I'm writing to extand a warm invitation to you for a dinner gathering at my place.\n\n        It would be an honor to have you join us for an evening filed with delightful conversation and delicious food.\n        Your presence would greatly enrich our gathering.\n\n        Please let me know if you are coming to attend.\n\n        Warm regards,\n        Muhammad Salman Hussain\n\n    ");
        console.log(specialMessage);
        /* Then I paste my old message with console.log from my previous guestList.ts file */
        /* And after this, just change ${guest} to ${forGuest} */
    });
}
;
console.log("\nOLD MESSAGES:\n");
inviteMessages(specialGuests);
var notComingGuests = specialGuests[0];
console.log("\nUnfortunately ".concat(notComingGuests, " can't coming for the dinner."));
var newGuest = "ABC/XYZ"; /* Replacing Sir Daniyal Nagori's name with "ABC/XYZ" (None) */
specialGuests[0] = newGuest;
console.log("NEW MESSAGES:\n");
inviteMessages(specialGuests);
