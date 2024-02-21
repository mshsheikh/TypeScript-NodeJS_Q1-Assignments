const specialGuests : string[] = ["Sir Daniyal Nagori" , "Sir Zia Khan" , "Sir Muhammad Qasim"];

specialGuests.forEach(guest => {
    const specialMessage : string =
    `\nAssalam-o-Alaikum
        Dear ${guest},

        I'm writing to extand a warm invitation to you for a dinner gathering at my place.

        It would be an honor to have you join us for an evening filed with delightful conversation and delicious food.
        Your presence would greatly enrich our gathering.

        Please let me know if you are coming to attend.

        Warm regards,
        Muhammad Salman Hussain\n
    `
    console.log(specialMessage);
}
    );