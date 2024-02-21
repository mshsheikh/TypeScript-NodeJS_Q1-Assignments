function 
    makeSandwich
        (...toppings: any[]): any[] 
    {
        console.log("Making a sandwich with the following toppings:");
    for (
            const topping of toppings
        )
        
        {
            console.log("- " + topping);
        }

    console.log
        ("Sandwich is ready!\n");
    
    return toppings;
    
    }

makeSandwich
    ("Chicken", "Cheddar", "Spinach", "Onion");
makeSandwich
    ("Beef", "Mozzarella", "Peppers");
makeSandwich
    ("Peanut Butter", "Jam");