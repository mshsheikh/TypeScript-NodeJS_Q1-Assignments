function make_shirt
        (
            size: string = "large",
            message: string = "I love TypeScript"
        ) 
        
        {
            console.log(
                `Shirt size: ${size.toUpperCase()}, Message: ${message}`);
        }

make_shirt();

make_shirt("Medium", "I love Python");

make_shirt("Small", "Programming is Awesome!");