/*

I'm Muhammad Salman Hussain,
and all of the codes in TS_NodeJS folder is 100% my own struggle :`)

*/

const specialGuests : string[] = ["Sir Daniyal Nagori" , "Sir Zia Khan" , "Sir Muhammad Qasim"];

function inviteMessages(forGuest : string[]) {
    forGuest.forEach(
        forGuest => {

            /* The above code is for modifying my old message for new guest list */
            
            const specialMessage : string =
    `\nAssalam-o-Alaikum
        Dear ${forGuest},

        I'm writing to extand a warm invitation to you for a dinner gathering at my place.

        It would be an honor to have you join us for an evening filed with delightful conversation and delicious food.
        Your presence would greatly enrich our gathering.

        Please let me know if you are coming to attend.

        Warm regards,
        Muhammad Salman Hussain\n
    `
    console.log(specialMessage);

        /* Then I paste my old message with console.log from my previous guestList.ts file */
        /* And after this, just change ${guest} to ${forGuest} */
        }
    )
};

console.log("\nOLD MESSAGES:\n");
inviteMessages(specialGuests);

const notComingGuests : string = specialGuests[0];
console.log(`\nUnfortunately ${notComingGuests} can't coming for the dinner.`);

const newGuest : string = "ABC/XYZ"; /* Replacing Sir Daniyal Nagori's name with "ABC/XYZ" (None) */
specialGuests[0] = newGuest

console.log("NEW MESSAGES:\n");
inviteMessages(specialGuests);