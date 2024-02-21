function makeGreatMagicians(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    var displayedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        displayedMagicians.push(magician);
        console.log(magician);
    }
    return displayedMagicians;
}
var magicians = [
    "Jeff McBride (American Magician)",
    "Penn & Teller (American Magicians)",
    "Criss Angel (American Magicians)"
];
var copiedMagicians = magicians.slice();
var greatMagicians = makeGreatMagicians(copiedMagicians);
console.log("Original Magicians:");
var originalMagicians = showMagicians(magicians);
console.log("\nGreat Magicians:");
var modifiedMagicians = showMagicians(greatMagicians);
console.log(originalMagicians);
console.log(modifiedMagicians);
