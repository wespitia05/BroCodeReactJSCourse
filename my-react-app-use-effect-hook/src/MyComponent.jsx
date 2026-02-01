// useEffect() = react hook that tells react "do some code when" (pick one):
//               this component re-renders
//               this component mounts
//               the state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           // runs after every re-render
// 2. useEffect(() => {}, [])       // runs only on mount
// 3. useEffect(() => {}, [value])  // runs on mount + when value changes

// USES:
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Green");

    // every time the code re-renders, we change the title
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]); // any time count or color changes, do this code
    // if we want the title to update once, add empty array 
    /*
    useEffect(() => {
        document.title = `My Counter Program`;
    }, []);
    */
   // insert count dependency, title will change ONLY when count changes
    /*
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    */

    function addCount() {
        setCount(prevCount => prevCount + 1);
    }
    function subtractCount() {
        setCount(prevCount => prevCount - 1);
    }
    function changeColor() {
        // if previous color is green, return red. otherwise return green
        setColor(prevColor => prevColor === "Green" ? "Red" : "Green")
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default MyComponent