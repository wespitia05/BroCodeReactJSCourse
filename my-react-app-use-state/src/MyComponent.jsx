// import useState ONLY from react component
import React, {useState} from 'react';

function MyComponent() {
    // set guest as the initial variable that will display before pressing button
    const [name, setName] = useState("Guest");

    // when this function is called, we use the setName parameter to set the name
    const updateName = () => {
        setName("Spongebob");
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
    );
}

export default MyComponent