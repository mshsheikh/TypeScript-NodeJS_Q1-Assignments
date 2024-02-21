var Points = function (color, points) {
    console.log("You earned ".concat(points, " Points."));
};
var AlienColor = function (color) {
    switch (color) {
        case 'green':
            Points(color, 5);
            break;
        case 'yellow':
            Points(color, 10);
            break;
        case 'red':
            Points(color, 15);
            break;
        default:
            console.log("Unknown alien color.");
    }
};
AlienColor('green');
AlienColor('yellow');
AlienColor('red');
