import React from 'react';
import styles from "./Posts.module.css";
import MyTextBtn from "../UI/MyTextBtn/MyTextBtn";

const Posts = (props) => {
    return (
        <div className={styles.pattern}>
            {props.posts.map(post =>
                <div className={styles.slider} key={post.id}>
                    <img className={styles.pattern_image} src={post.image} alt=""/>
                    <div className={styles.pattern_title}>{post.name}</div>
                    <div className={styles.pattern_description}>
                        {post.description}
                    </div>
                    <MyTextBtn>
                        Read more
                    </MyTextBtn>
                </div>
            )}
        </div>
    );
};

export default Posts;