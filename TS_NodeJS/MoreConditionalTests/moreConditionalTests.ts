let name1 = 'salman';
let name2 = 'Salman';

console.log(
    "(toLowerCase) function: ",
    name1.toLowerCase() === name2.toLowerCase()
    );



let car1 = 'REVO';
let car2 = 'Civic';

console.log(
    "Equality with strings: ",
    car1 == car2
    );

console.log(
    "Inequality with strings: ",
    car1 != car2
    );



let colors = ['blue', 'white', 'black', 'silver'];

console.log("Item is in the array: ", colors.includes('blue'));
console.log("Item is not in the array: ", !colors.includes('yellow'));



let num1 = 92.46;
let num2 = 92.42;

console.log("Numerical equality: ",
            num1 === num2);
console.log("Numerical inequality: ",
            num1 !== num2);
console.log("Numerical greater than: ",
            num1 > num2);
console.log("Numerical less than: ",
            num1 < num2);
console.log("Numerical greater than or equal to: ",
            num1 >= num2);
console.log("Numerical less than or equal to: ",
            num1 <= num2);



let x = 40;
let y = 30;
let z = 60;

console.log("Using 'and' operator: ", x > y && x < z);
console.log("Using 'or' operator: ", x < y || x > z);