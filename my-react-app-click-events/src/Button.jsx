function Button() {

    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    /*
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
    */
    
    // changes the text for the button after clicking on it
    const handleClick = (e) => e.target.textContent = "OUCH! 🤕";

    return(
        // using arrow function prevents from calling the function right away
        <button onClick={(e) => handleClick(e)}>Click Me 😄</button>
    );
}

export default Button