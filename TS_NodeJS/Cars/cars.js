function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    options.forEach(function (option) {
        Object.keys(option).forEach(function (key) {
            car[key] = option[key];
        });
    });
    return car;
}
var carInfo = createCar("Honda", "Civic 2024", { color: "blue", sunroof: true });
console.log(carInfo);
