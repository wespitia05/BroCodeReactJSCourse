import React, {useState} from "react";

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYears, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    return(
        <p>hello</p>
    );
}

export default MyComponent