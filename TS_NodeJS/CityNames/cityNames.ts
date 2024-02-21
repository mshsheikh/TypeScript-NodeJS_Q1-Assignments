function city_country
    (
        city: string,
        country: string
    ): 
        string
    {
        return `${city}, ${country}`;
    }

console.log(
    city_country("Istanbul", "Turkey")
    );

console.log(
    city_country("Shanghai", "China")
    );

console.log(
    city_country("Paris", "France")
    );