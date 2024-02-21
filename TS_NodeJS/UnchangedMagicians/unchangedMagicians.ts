function makeGreatMagicians
    (
        magicians: string[]
    ):
                   string[]
    {
        const greatMagicians: string[] = [];
        
    for (
            const magician of magicians
        )
        
        {
            greatMagicians.push
            (`the Great ${magician}`);
        }
    
        return greatMagicians;
    }


function showMagicians
    (
        magicians: string[]
    ):
                   string[]
    {
        const displayedMagicians: string[] = [];

    for (
            const magician of magicians){
            
                displayedMagicians.push(magician);
        
                console.log(magician);
        }
            
        return displayedMagicians;
    }


    const magicians: string[] =
    [
        "Jeff McBride (American Magician)",
        "Penn & Teller (American Magicians)",
        "Criss Angel (American Magicians)"
    ];

const copiedMagicians: string[]
    = magicians.slice();

const greatMagicians: string[]
    = makeGreatMagicians(copiedMagicians);

console.log("Original Magicians:");
    const originalMagicians: string[]
        = showMagicians(magicians);

console.log("\nGreat Magicians:");
    const modifiedMagicians: string[]
        = showMagicians(greatMagicians);

console.log(originalMagicians);
console.log(modifiedMagicians);