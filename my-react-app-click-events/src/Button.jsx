function Button() {

    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    let count = 0;

    const handleClick = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else {
            console.log(`${name} stop clicking me!`)
        }
    }

    return(
        // using arrow function prevents from calling the function right away
        <button onClick={() => handleClick("william")}>Click Me 😄</button>
    );
}

export default Button