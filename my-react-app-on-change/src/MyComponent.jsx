import React, {useState} from "react";

function MyComponent() {
    // creating stateful name variable w/ setter function
    // inital value is an empty string
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    // this function will handle changing the name
    // invoke set name function, access the event object, access target and get value property
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    // onChange event handler triggers the function every time the input value changes
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>
        </div>
    );
}

export default MyComponent