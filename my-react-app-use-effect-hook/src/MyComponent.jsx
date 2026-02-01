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

import React, {useState} from "react";

function MyComponent() {
    return(
        <p>hello</p>
    );
}

export default MyComponent