import React from 'react';
import './Swiper.css'
import leftArrow from "../../images/ButtonLeft.svg";
import rightArrow from "../../images/ButtonRight.svg";

const SwiperBtn = ({ direction, moveSlide }) => {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
};

export default SwiperBtn;