const specialGuests: string[] = ["Sir Daniyal Nagori", "Sir Zia Khan", "Sir Muhammad Qasim"];

function inviteMessages(forGuest: string[])
{
    forGuest.forEach
    (forGuest => 
    {
        const specialMessage: string = `
Assalam-o-Alaikum
Dear ${forGuest},

I'm writing to extend a warm invitation to you for a dinner gathering at my place.

It would be an honor to have you join us for an evening filled with delightful conversation and delicious food.
Your presence would greatly enrich our gathering.

Please let me know if you are coming to attend.

Warm regards,
Muhammad Salman Hussain\n
`;
        console.log(specialMessage);
    }
    
    );
}

console.log("\nOLD MESSAGES:\n");
inviteMessages(specialGuests);

const notComingGuest: string = specialGuests[0];
console.log(`\nUnfortunately ${notComingGuest} can't come for the dinner.`);
specialGuests.shift();

const newGuest: string = "ABC/XYZ"; /* Replacing Sir Daniyal Nagori's name with "ABC-XYZ" (None) */

specialGuests[0] = newGuest;

console.log("NEW MESSAGES:\n");
inviteMessages(specialGuests);

console.log("\nI found a bigger dinner table.\n");

specialGuests.unshift("ABC-123");
specialGuests.splice(
    Math.floor(specialGuests.length / 2), 0, "DEF-456"
);
specialGuests.push("GHI-789");

console.log("\nUPDATED GUEST LIST AND INVITATION MESSAGES:\n");

inviteMessages(specialGuests);

console.log("\nNumber of people invited to dinner: ", specialGuests.length);