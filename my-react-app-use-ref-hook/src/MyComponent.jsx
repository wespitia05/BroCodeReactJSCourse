// useState() = re-renders the component when the state value changes

// useRef()   = "use reference" does not cause re-renders when its value changes
//              when you want a component to "remember" some information,
//              but you don't want that information to trigger new renders

//              1. accessing/interacting with DOM elements
//              2. handling focus, animations, and transitions
//              3. managing timers and intervals

import React, {useState, useEffect} from "react";

function MyComponent() {
    return(
        <div>
            <p>hello</p>
        </div>
    );
}

export default MyComponent