var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var inNext5Years = ["UAE", "Qatar", "Australia", "Finland", "USA"];
console.log("Original Style:");
console.log(inNext5Years);
console.log("\nAlphabetical Style (without modification):");
console.log(__spreadArray([], inNext5Years, true).sort());
console.log("\nArray is still in its original style:");
console.log(inNext5Years);
console.log("\nReverse alphabetical order (without modification):");
console.log(__spreadArray([], inNext5Years, true).sort().reverse());
console.log("\nArray is still in its original style:");
console.log(inNext5Years);
inNext5Years.reverse();
console.log("\nReversed style:");
console.log(inNext5Years);
inNext5Years.reverse();
console.log("\nBack to original style:");
console.log(inNext5Years);
inNext5Years.sort();
console.log("\nSorted in alphabetical style:");
console.log(inNext5Years);
inNext5Years.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical style:");
console.log(inNext5Years);
