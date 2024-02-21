function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
    return magicians;
}
var magicians = ["Jeff McBride (American Magician)",
    "Penn & Teller (American Magicians)",
    "Criss Angel (American Magicians)"
];
var magiciansName = show_magicians(magicians);
