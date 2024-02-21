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
var newGuest = "ABC/XYZ"; /* Replacing Sir Daniyal Nagori's name with "ABC-XYZ" (None) */
specialGuests[0] = newGuest;
console.log("NEW MESSAGES:\n");
inviteMessages(specialGuests);
console.log("\nI found a bigger dinner table.\n");
specialGuests.unshift("ABC-123");
specialGuests.splice(Math.floor(specialGuests.length / 2), 0, "DEF-456");
specialGuests.push("GHI-789");
console.log("\nUPDATED GUEST LIST AND INVITATION MESSAGES:\n");
inviteMessages(specialGuests);
console.log("\nNumber of people invited to dinner: ", specialGuests.length);
