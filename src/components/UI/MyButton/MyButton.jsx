import React from 'react';
import styles from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {
    return (
        <button className={styles.btn} >
            { children }
        </button>
    );
};

export default MyButton;