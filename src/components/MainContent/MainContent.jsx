import React from 'react';
import styles from "./MainContent.module.css";
import FormTravel from "../FormTravel/FormTravel";
import image from "../../images/MainImage.svg";

const MainContent = () => {
    return (
        <div className={styles.main__page}>
            <div className={styles.register_travel}>
                <p className={styles.main_text}>Explore and<br/> Travel</p>
                <p className={styles.main_text_down}>Holiday finder</p>
                <hr className={styles.hr}/>
                <FormTravel />
            </div>
            <div className={styles.main_image}>
                <img src={image}/>
            </div>
        </div>
    );
};

export default MainContent;