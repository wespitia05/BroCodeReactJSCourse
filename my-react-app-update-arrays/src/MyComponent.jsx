import React, {useState} from "react";

function MyComponent() {
    // array destructuring to create array of foods with setter function
    // useState will set initial state to the following array
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {

    }
    function handleRemoveFood() {

    }

    // take array of foods, use map to return a new array
    // add key to each list item to keep track, then within each list
    // item return each food element
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>
        </div>
    );
}

export default MyComponent