import React from 'react';
import styles from "./HomePage.module.css";
import Header from "../../components/Header/header";
import MainContent from "../../components/MainContent/MainContent";
import FirstContent from "../../components/FirstContent/FirstContent";
import FeatureDestinations from "../../components/FeatureDestinations/FeatureDestinations";
import ThirdContent from "../../components/ThirdContent/ThirdContent";
import FourContent from "../../components/FourContent/FourContent";
import FiveContent from "../../components/FiveContent/FiveContent";

const HomePage = () => {
    return (
        <div className={styles.App}>
            <MainContent />
            <FirstContent />
            <FeatureDestinations />
            <ThirdContent />
            <FourContent />
            <FiveContent />
        </div>
    );
};

export default HomePage;