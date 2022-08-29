import React from 'react';
import styles from "./header.module.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <NavLink to={"/home"}>
                    <div className={styles.logo}>
                        <img src={logo} className={styles.logo_img} alt=""/>
                    </div>
                </NavLink>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;