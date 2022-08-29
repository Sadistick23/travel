import React from 'react';
import styles from "../MybuttonOrange/MyButtonOrange.module.css";

const MyButtonOrange = ({children, ...props}) => {
    return (
        <button className={styles.btn} >
            { children }
        </button>
    );
};

export default MyButtonOrange;