// import styles from './Button.module.css' // module method

function Button() {
    // inline method
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "20px 40px",
        borderRadius: "15px",
        border: "none",
        cursor: "pointer",
        fontSize: "3rem"
    }
    return(
        // external method
        // <button className={"button"}>Click Me</button>

        // module method
        // <button className={styles.button}>Click Me</button>

        // inline method
        <button style={styles}>Click Me</button>
    );
}

export default Button