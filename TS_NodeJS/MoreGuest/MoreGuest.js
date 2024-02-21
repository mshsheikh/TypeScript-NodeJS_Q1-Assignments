var specialGuests = ["Sir Daniyal Nagori", "Sir Zia Khan", "Sir Muhammad Qasim"];
function inviteMessages(forGuest) {
    forGuest.forEach(function (forGuest) {
        /* The above code is for modifying my old message for new guest list */
        var specialMessage = "\nAssalam-o-Alaikum\nDear ".concat(forGuest, ",\n\nI'm writing to extend a warm invitation to you for a dinner gathering at my place.\n\nIt would be an honor to have you join us for an evening filled with delightful conversation and delicious food.\nYour presence would greatly enrich our gathering.\n\nPlease let me know if you are coming to attend.\n\nWarm regards,\nMuhammad Salman Hussain\n\n");
        console.log(specialMessage);
        /* Then I paste my old message with console.log from my previous guestList.ts file */
        /* And after this, just change ${guest} to ${forGuest} */
    });
}
;
console.log("\nOLD MESSAGES:\n");
inviteMessages(specialGuests);
var notComingGuests = specialGuests[0];
console.log("\nUnfortunately ".concat(notComingGuests, " can't come for the dinner."));
var newGuest = "ABC/XYZ"; /* Replacing Sir Daniyal Nagori's name with "ABC-XYZ" (None) */
specialGuests[0] = newGuest;
console.log("NEW MESSAGES:\n");
inviteMessages(specialGuests);
/*
                    ****    DONE with the Help of W3School  ****

            Now adding more guests...
            "ABC-123" , "DEF-456" , "GHI-789" are 3 new guests names, using just for example.
*/
console.log("\nI found a bigger dinner table.\n");
/*
Using "unshift() and splice()" from the help of W3School!
*/
specialGuests.unshift("ABC-123");
specialGuests.splice(
/* Here I'm using Math.floor */
Math.floor(specialGuests.length / 2), 0, "DEF-456");
/*
Using "push()" from the help of W3School!
*/
specialGuests.push("GHI-789");
console.log("\nUPDATED GUEST LIST AND INVITATION MESSAGES:\n");
inviteMessages(specialGuests);
/*
Using "unshift(), splice(), and push()" from the help of W3School
*/ 
