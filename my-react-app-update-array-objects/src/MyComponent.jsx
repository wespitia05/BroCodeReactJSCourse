import React, {useState} from "react";

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    // this function handles adding a new car
    function handleAddCar() {
        // create new constant to hold the new car information
        const newCar = {year: carYear, make: carMake, model: carModel};

        // use updater function to pass over the information from the previous cars
        // and add the information of the new car on top of it
        setCars(prevCars => [...prevCars, newCar]);

        // reset values to initial state
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    // this function handles removing a car
    // our parameter is the index from the list which will be removed after clicking on it
    function handleRemoveCar(index) {
        setCars(prevCars => prevCars.filter((_, i) => i !== index));
    }
    // this function handles changing the year of the car
    // our parameter is an event bc we take the value of the input
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    // this function handles changing the make of the car
    // our parameter is an event bc we take the value of the input
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    // this function handles changing the model of the car
    // our parameter is an event bc we take the value of the input
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent