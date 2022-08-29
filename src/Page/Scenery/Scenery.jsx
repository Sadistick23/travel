import React from 'react';
import styles from "./Scenery.module.css"
import {useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import MyButtonOrange from "../../components/UI/MybuttonOrange/MyButtonOrange";
import img from "../../images/ButtonLeft.svg"
import MyButton from "../../components/UI/MyButton/MyButton";

const Scenery = () => {
    const location = useParams().id - 1
    const state = useSelector(state => state.scenery.scenery[location])

    return (
        <div className={styles.app}>
            <NavLink to={"/scenery"} className={styles.back}>
                <img className={styles.img_btn} src={img} alt=""/>
                <div className={styles.back_text}>Go back</div>
            </NavLink>
            <div className={styles.wrapper}>
                <img className={styles.img} src={state.image} alt=""/>
                <div className={styles.info_scenery}>
                    <div className={styles.info_name}>{state.name}</div>
                    <div className={styles.info_description}>{state.description}</div>
                    <div className={styles.info_text}>{state.text}</div>
                </div>
            </div>
        </div>
    );
};

export default Scenery;