import React from 'react';
import style from "./MyTextBtn.module.css"

const MyTextBtn = ({children, ...props}) => {
    return (
        <a href="#" className={style.btn}>
            {children}
        </a>
    );
};

export default MyTextBtn;