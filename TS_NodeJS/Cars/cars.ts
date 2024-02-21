function
    createCar(
        manufacturer: string,
        modelName: string,
        ...options: { [key: string]: any }[]
            ):

        {
            manufacturer: string,
            modelName: string, [key: string]: any 
        }
        
        {
            const car: {
                            manufacturer: string,
                            modelName: string, [key: string]: any
                       }
            = {
                    manufacturer,
                    modelName
              };


                    options.forEach
                    (
                        option => {
                        Object.keys(option).forEach(key => {car[key] = option[key];
                    }
        );
                                  }
                    );
                        return car;
        }
    
    const carInfo
        = createCar("Honda", "Civic 2024",
            { color: "blue", sunroof: true }
                    );
                    
    console.log(carInfo);