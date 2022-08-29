import React from 'react';
import fierstImage from "../../images/FierstImage.svg";
import styles from "./FirstContent.module.css"
import MyButtonOrange from "../UI/MybuttonOrange/MyButtonOrange";

const FirstContent = () => {
    return (
        <div className={styles.fierst__content}>
            <img className={styles.fierst__image} src={fierstImage} alt=""/>
            <div className={styles.fierst__content_info}>
                <div className={styles.fierst__content_title}>
                    A new way to explore the world
                </div>
                <div className={styles.fierst__content_description}>
                    For decades travellers have reached for Lonely Planet
                    books when looking to plan and execute their perfect
                    trip, but now, they can also let Lonely Planet
                    Experiences lead the way
                </div>
                <MyButtonOrange>Learn more</MyButtonOrange>
            </div>
        </div>
    );
};

export default FirstContent;