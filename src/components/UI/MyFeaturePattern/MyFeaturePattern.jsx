import React from 'react';
import styles from "./MyFeaturePattern.module.css";
import {NavLink} from "react-router-dom";

const MyFeaturePattern = (pattern) => {
    return (
        <div className={styles.featured__pattern}>
            {pattern.pattern.map(pattern =>
                <NavLink
                    key={pattern.id}
                    to={`/scenery/${pattern.id}`}
                >
                    <div className={styles.pattern} key={pattern.id}>
                        <div className={styles.featured__pattern_text}>
                            <div className={styles.text__main}>{pattern.name}</div>
                            <div className={styles.text__description}>{pattern.description}</div>
                        </div>
                        <img className={styles.featured__pattern_image} src={pattern.image} alt=""/>
                    </div>
                </NavLink>
            )}
        </div>
    );
};

export default MyFeaturePattern;