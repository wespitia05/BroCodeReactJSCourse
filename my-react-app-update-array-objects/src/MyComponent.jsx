import React, {useState} from "react";

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

    }
    function handleRemoveCar(index) {

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

            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model"/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent