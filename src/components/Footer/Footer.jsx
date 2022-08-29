import React from 'react';
import styles from "./Footer.module.css";
import logo from "../../images/logo.svg";
import twitter from "../../images/twitter.svg";
import faceBook from "../../images/FaceBook.svg";
import instagram from "../../images/instagram.svg";
import inn from "../../images/in.svg";
import youTube from "../../images/YouTube.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <div className={styles.left_bar}>
                    <img src={logo} alt=""/>
                    <div className={styles.left_info}>
                        <p>Plan and book your perfect trip with
                            expert advice, travel tips destination
                            information from us</p>
                    </div>
                    <div className={styles.left_description}>
                        ©2020 Thousand Sunny. All rights reserved
                    </div>
                </div>
                <div className={styles.midl_bar}>
                    <p className={styles.midl__bar_name}>Destinations</p>
                    <ul className={styles.midl__bar_list}>
                        <li><a href="#">Africa</a></li>
                        <li><a href="#">Antarctica</a></li>
                        <li><a href="#">Asia</a></li>
                        <li><a href="#">Europe</a></li>
                        <li><a href="#">America</a></li>
                    </ul>
                </div>
                <div className={styles.midl_bar}>
                    <p className={styles.midl__bar_name}>Shop</p>
                    <ul className={styles.midl__bar_list}>
                        <li><a href="#">Africa</a></li>
                        <li><a href="#">Antarctica</a></li>
                        <li><a href="#">Asia</a></li>
                        <li><a href="#">Europe</a></li>
                        <li><a href="#">America</a></li>
                    </ul>
                </div>
                <div className={styles.midl_bar}>
                    <p className={styles.midl__bar_name}>Interests</p>
                    <ul className={styles.midl__bar_list}>
                        <li><a href="#">Africa</a></li>
                        <li><a href="#">Antarctica</a></li>
                        <li><a href="#">Asia</a></li>
                        <li><a href="#">Europe</a></li>
                        <li><a href="#">America</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className={styles.footer__bottom}>
                <a href="#"><img className={styles.footer__bottom_img} src={twitter} alt=""/></a>
                <a href="#"><img className={styles.footer__bottom_img} src={faceBook} alt=""/></a>
                <a href="#"><img className={styles.footer__bottom_img} src={instagram} alt=""/></a>
                <a href="#"><img className={styles.footer__bottom_img} src={inn} alt=""/></a>
                <a href="#"><img className={styles.footer__bottom_img} src={youTube} alt=""/></a>
            </div>
        </footer>
    );
};

export default Footer;