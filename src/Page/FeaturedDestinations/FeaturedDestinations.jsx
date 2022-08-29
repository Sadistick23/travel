import React from 'react';
import MyFeaturePattern from "../../components/UI/MyFeaturePattern/MyFeaturePattern";
import styles from "./FeaturedDestinations.module.css"
import {useSelector} from "react-redux";

const FeaturedDestinations = () => {
    const state = useSelector(state => state.scenery.scenery)

    return (
        <div className={styles.app}>
            <h1 className={styles.title_name}>Featured destinations</h1>
            <MyFeaturePattern pattern={state} />
        </div>
    );
};

export default FeaturedDestinations;