// import useState ONLY from react component
import React, {useState} from 'react';

function MyComponent() {
    // set guest as the initial variable that will display before pressing button
    const [name, setName] = useState("Guest");
    // set age 0 as the initial age
    const [age, setAge] = useState(0);
    // set isEmployed to be false as the initial state
    const [isEmployed, setIsEmployed] = useState(false);

    // when this function is called, we use the setName parameter to set the name
    const updateName = () => {
        setName("Spongebob");
    }

    // when this function is called, we increment the age by 1
    const incrementAge = () => {
        setAge(age + 1);
    }

    // when this function is called, we toggle back and forth between true/false
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent