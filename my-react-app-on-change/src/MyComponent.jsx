import React, {useState} from "react";

function MyComponent() {
    // creating stateful name variable w/ setter function
    // inital value is an empty string
    const [name, setName] = useState("");

    // this function will handle changing the name
    // invoke set name function, access the event object, access target and get value property
    function handleNameChange(event) {
        setName(event.target.value);
    }

    // onChange event handler triggers the function every time the input value changes
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
        </div>
    );
}

export default MyComponent