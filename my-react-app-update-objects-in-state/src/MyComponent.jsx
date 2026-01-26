import React, {useState} from 'react';

function MyComponent() {
    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});
    
    function handleYearChange(event) {
        // use spread operator to keep car info, only change the year
        // wrap in set paranthesis to create an object within an arrow function
        // use prevCar to show we are keeping the previous cars values, only the year is changing
        setCar(prevCar => ({...prevCar, year: event.target.value}));
    }
    function handleMakeChange(event) {
        // use spread operator to keep car info, only change the make
        // wrap in set paranthesis to create an object within an arrow function
        // use prevCar to show we are keeping the previous cars values, only the make is changing
        setCar(prevCar => ({...prevCar, make: event.target.value}));
    }
    function handleModelChange(event) {
        // use spread operator to keep car info, only change the model
        // wrap in set paranthesis to create an object within an arrow function
        // use prevCar to show we are keeping the previous cars values, only the model is changing
        setCar(prevCar => ({...prevCar, model: event.target.value}));
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            
            <input type="number" value={car.year} onChange={handleYearChange}/><br></br>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br></br>
            <input type="text" value={car.model} onChange={handleModelChange}/><br></br>
        </div>
    );
}

export default MyComponent