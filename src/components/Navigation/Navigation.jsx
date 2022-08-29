import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";
import MyButton from "../UI/MyButton/MyButton";
import MyButtonOrange from "../UI/MybuttonOrange/MyButtonOrange";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.ul}>
                <NavLink
                    to="/home"
                    className={navData => navData.isActive ? styles.active : styles.li}
                >Home
                </NavLink>
                <NavLink
                    to="/destinations"
                    className={navData => navData.isActive ? styles.active : styles.li}
                >Destinations
                </NavLink>
                <NavLink
                    to="/about"
                    className={navData => navData.isActive ? styles.active : styles.li}
                >About
                </NavLink>
                <NavLink
                    to="/partner"
                    className={navData => navData.isActive ? styles.active : styles.li}
                >Partner
                </NavLink>
                <MyButton>Login</MyButton>
                <MyButtonOrange>Register</MyButtonOrange>
            </ul>
        </nav>
    );
};

export default Navigation;