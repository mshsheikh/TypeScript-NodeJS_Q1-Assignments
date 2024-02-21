const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers)

    {
        let ending: string;

        if (number === 1) ending = 'st';
            else if
                (number === 2) ending = 'nd';
            else if
                (number === 3) ending = 'rd';
            else ending = 'th';

        console.log(`${number}${ending}`);
    }