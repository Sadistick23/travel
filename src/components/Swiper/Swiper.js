import React, {useState} from 'react';
import './Swiper.css'
import SwiperBtn from "./SwiperBtn";
import dataSlider from "./dataSlider";

const Swiper = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={obj.image}
                        />
                    </div>
                )
            })}
            <div className="author__slideBar">
                <SwiperBtn moveSlide={nextSlide} direction={"next"} />
                <SwiperBtn moveSlide={prevSlide} direction={"prev"}/>
            </div>


            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Swiper;