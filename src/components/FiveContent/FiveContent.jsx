import React from 'react';
import styles from "./FiveContent.module.css";
import arrow from "../../images/Arrow.svg";
import Posts from "../Posts/Posts";
import pattern1 from "../../images/pattern1.svg";
import pattern2 from "../../images/pattern2.svg";
import pattern3 from "../../images/pattern3.svg";
import pattern4 from "../../images/pattern4.svg";

const FiveContent = () => {
    return (
        <div className={styles.five__content}>
            <div className={styles.five__content_header}>
                <div className={styles.header_title}>
                    Trending stories
                    <a className={styles.header_viewAll} href="#">View all <img src={arrow} alt=""/></a>
                </div>
            </div>
            <div className={styles.posts}>
                <Posts posts={[
                    {id: 1, image: pattern1, name: "The many benefits of taking a healing holiday", description: "‘Helaing holidays’ are on the rise tohelp maximise your health and happines..." },
                    {id: 2, image: pattern2, name: "The best Kyoto restaurant to try Japanese food", description: "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit..." },
                    {id: 3, image: pattern3, name: "Skip Chichen Itza and head to this remote Yucatan", description: "It’s remote and challenging to get, but braving the jungle and exploring these ruins without the..." },
                    {id: 4, image: pattern4, name: "Surf’s up at these beginner spots around the world", description: "If learning to surf has in on your to-do list for a while, the good news is: it’s never too late..." },
                ]}/>
            </div>
        </div>
    );
};

export default FiveContent;