function show_magicians
    (
        magicians:  string[]
    ):
                    string[]
    {
    
        magicians.forEach(
            magician => console.log(magician)
                        );
    return magicians;
    
    }

const magicians: string[]
        = ["Jeff McBride (American Magician)",
           "Penn & Teller (American Magicians)",
           "Criss Angel (American Magicians)"
          ];

const magiciansName 
= show_magicians(magicians);