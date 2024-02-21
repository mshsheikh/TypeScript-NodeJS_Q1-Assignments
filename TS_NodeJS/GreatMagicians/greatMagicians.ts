function 
    make_great
    (
        magicians: string[]
    ):
                   string[]
    {
        return magicians.map(
            magician => `the Great ${magician}`);
    }

function 
    show_magicians
    (
        magicians: string[]
    ): 
                   string[]
    {
        magicians.forEach(
            magician => console.log(magician));
    
            return magicians;
}

const magicians: string[] = 
    [
        "Jeff McBride (American Magician)",
        "Penn & Teller (American Magicians)",
        "Criss Angel (American Magicians)"
    ];

const greatMagicians
    = make_great(magicians);
const displayedMagicians
    = show_magicians(greatMagicians);
    
console.log(displayedMagicians);