function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
    return magicians;
}
var magicians = [
    "Jeff McBride (American Magician)",
    "Penn & Teller (American Magicians)",
    "Criss Angel (American Magicians)"
];
var greatMagicians = make_great(magicians);
var displayedMagicians = show_magicians(greatMagicians);
console.log(displayedMagicians);
