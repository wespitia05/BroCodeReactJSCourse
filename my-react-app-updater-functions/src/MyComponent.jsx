import React, {useState} from 'react';

function MyComponent() {
    // array destructuring to create count and setCount w/ initial value 0
    const [count, setCount] = useState(0);

    // when this function is called, we increment the count by 1
    const increment = () => {
        // uses the CURRENT state to calculate the NEXT state
        // set functions do not trigger an update
        // react batches together state updates for performance reasons
        // NEXT state becomes the CURRENT state after an update
        // setCount(count + 1); // 0 + 1 = 1  ; count doesn't update
        // setCount(count + 1); // 0 + 1 = 1  ; count doesn't update
        // setCount(count + 1); // 0 + 1 = 1  ; count doesn't update

        // use arrow function to increment 3 times and rename count to previous count
        // takes the PENDING state to calculate NEXT state
        // react puts your updater function in a queue (waiting in line)
        // during the next render, it will call them in the same order
        setCount(prevCount => prevCount + 1); // 0 + 1 = 1
        setCount(prevCount => prevCount + 1); // 1 + 1 = 2
        setCount(prevCount => prevCount + 1); // 2 + 1 = 3
    }
    // when this function is called, we decrement the count by 1
    const decrement = () => {
        setCount(count - 1);
    }
    // when this function is called, we reset the count to 0
    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">Count: {count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default MyComponent