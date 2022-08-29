import React from 'react';
import styles from "./ThirdContent.module.css";
import MyButtonOrange from "../UI/MybuttonOrange/MyButtonOrange";
import thirdImage from "../../images/thirdImage.svg";

const ThirdContent = () => {
    return (
        <div className={styles.third__content}>
            <div className={styles.third__content_info}>
                <div className={styles.third__content_title}>
                    Guides by Thousand Sunny
                </div>
                <div className={styles.third__content_description}>
                    Packed with tips and advice from our on-the-ground
                    experts, our city guides app (iOS and Android) is
                    the ultimate resource before and during a trip.
                </div>
                <MyButtonOrange>Download</MyButtonOrange>
            </div>
            <img className={styles.third__image} src={thirdImage} alt=""/>
        </div>
    );
};

export default ThirdContent;