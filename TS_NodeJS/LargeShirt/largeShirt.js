function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: ".concat(size.toUpperCase(), ", Message: ").concat(message));
}
make_shirt();
make_shirt("Medium", "I love Python");
make_shirt("Small", "Programming is Awesome!");
