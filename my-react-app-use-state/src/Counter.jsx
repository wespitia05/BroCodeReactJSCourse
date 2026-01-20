import React, {useState} from 'react';

function Counter() {
    // array destructuring to create count and setCount w/ initial value 0
    const [count, setCount] = useState(0);

    // when this function is called, we increment the count by 1
    const increment = () => {
        setCount(count + 1);
    }
    // when this function is called, we decrement the count by 1
    const decrement = () => {
        setCount(count - 1);
    }
    // when this function is called, we reset the count to 0
    const reset = () => {
        setCount(0);
    }
}

export default Counter