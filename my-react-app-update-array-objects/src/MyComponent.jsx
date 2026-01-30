import React, {useState} from "react";

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYears, setCarYear] = useState(new Date().getFullYear());
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
        <p>hello</p>
    );
}

export default MyComponent