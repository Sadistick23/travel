import React from 'react';
import styles from "./FourContent.module.css";
import Star from "../../images/Star.svg";
import Swiper from "../Swiper/Swiper";

const FourContent = () => {
        return (
        <div className={styles.four__content}>
            <div className={styles.four__content_name}>
                Testimonials
            </div>
            <div className={styles.four__content_content}>
                <div>
                    <div className={styles.star}>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                    </div>
                    <div className={styles.content__description}>
                        “Quisque in lacus a urna fermentum euismod.
                        Integer mi nibh, dapibus ac scelerisque eu,
                        facilisis quis purus. Morbi blandit
                        sit amet turpis nec”
                    </div>
                    <div className={styles.author}>
                        <div className={styles.author__name}>
                            Edward Newgate
                        </div>
                        <div className={styles.author_description}>
                            Founder Circle
                        </div>
                    </div>
                </div>
                <div className={styles.author__pattern_image}>
                    <div className={styles.author__image}>
                        <Swiper />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourContent;