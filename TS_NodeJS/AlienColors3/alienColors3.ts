const Points =
                    (color: string, points: number):
            void => {
                    console.log(`You earned ${points} Points.`);
                    };

const AlienColor =  (color: string):

            void => {
    switch (color)
                {
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
    }};

AlienColor('green'); AlienColor('yellow'); AlienColor('red');