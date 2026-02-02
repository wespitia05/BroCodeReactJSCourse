// useState() = re-renders the component when the state value changes

// useRef()   = "use reference" does not cause re-renders when its value changes
//              when you want a component to "remember" some information,
//              but you don't want that information to trigger new renders

//              1. accessing/interacting with DOM elements
//              2. handling focus, animations, and transitions
//              3. managing timers and intervals

import React, {useState, useEffect, useRef} from "react";

function MyComponent() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "Yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "Red";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "Blue";
    }

    return(
        <div>
            <button onClick={handleClick1}>Click Me 1!</button>   
            <input ref={inputRef1}/><br/> 

            <button onClick={handleClick2}>Click Me 2!</button>   
            <input ref={inputRef2}/> <br/>

            <button onClick={handleClick3}>Click Me 3!</button>   
            <input ref={inputRef3}/> 
        </div>
    );
}

export default MyComponent