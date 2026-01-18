function Button() {

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return(
        // using arrow function prevents from calling the function right away
        <button onClick={() => handleClick2("william")}>Click Me 😄</button>
    );
}

export default Button