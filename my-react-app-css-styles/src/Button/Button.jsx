import styles from './Button.module.css' // module method

function Button() {
    return(
        // external method
        // <button className={"button"}>Click Me</button>

        // module method
        <button className={styles.button}>Click Me</button>
    );
}

export default Button