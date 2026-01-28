import React, {useState} from "react";

function MyComponent() {
    // array destructuring to create array of foods with setter function
    // useState will set initial state to the following array
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        // get just the value of the element typed
        const newFood = document.getElementById("foodInput").value;
        // after pressing button or refreshing page, reset input
        document.getElementById("foodInput").value = "";

        // use updater function to not work with current state of array but the previous state of the array
        // use spread operator to keep original array and add new food on top
        setFoods(prevFoods => [...prevFoods, newFood]);
    }
    function handleRemoveFood(index) {
        // using underscore for a parameter is a convention to indiciate that
        // the paramter being passed to the function is being ignored 
        setFoods(foods.filter((_, i) => i !== index));
    }

    // take array of foods, use map to return a new array
    // add key to each list item to keep track, then within each list
    // item return each food element
    // since remove food has a parameter, we need to use an arrow function
    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent