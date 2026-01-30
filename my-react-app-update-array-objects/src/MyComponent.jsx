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
    function handleYearChange(event) {

    }
    function handleMakeChange(event) {

    }
    function handleModelChange(event) {

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