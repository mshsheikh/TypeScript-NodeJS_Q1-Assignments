const inNext5Years: string[] = ["UAE", "Qatar", "Australia", "Finland", "USA"];

console.log("Original Style:");
console.log(inNext5Years);

console.log("\nAlphabetical Style (without modification):");
console.log([...inNext5Years].sort());

console.log("\nArray is still in its original style:");
console.log(inNext5Years);

console.log("\nReverse alphabetical order (without modification):");
console.log([...inNext5Years].sort().reverse());

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

inNext5Years.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical style:");
console.log(inNext5Years);