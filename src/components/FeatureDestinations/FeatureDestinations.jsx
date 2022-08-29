import React from 'react';
import styles from "./FeatureDestinations.module.css";
import arrow from "../../images/Arrow.svg";
import MyFeaturePattern from "../UI/MyFeaturePattern/MyFeaturePattern";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const FeatureDestinations = () => {
    const state = useSelector(state => state.scenery.scenery).slice(0,4)

    return (
        <div className={styles.main__featured}>
            <div className={styles.featured__header}>
                <p className={styles.main__text_featured}>Featured destinations</p>
                <NavLink className={styles.featured__header_text} to="/scenery">View all <img src={arrow}/></NavLink>
            </div>
            <div className={styles.featured__content}>
                <MyFeaturePattern
                    pattern={state}
                />
            </div>
        </div>
    );
};

export default FeatureDestinations;