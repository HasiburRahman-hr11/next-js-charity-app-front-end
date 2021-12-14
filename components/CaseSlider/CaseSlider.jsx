import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from "react-slick";

import CaseCard from '../CaseCard/CaseCard';

const sliderBtnStyle = {

}


function NextButton(props) {
    const { className, style, onClick } = props;
    return (
        <span
            className={className}
            style={{ ...style }}
            onClick={onClick}

        >
            <BsArrowRight />
        </span>
    );
}

function PrevButton(props) {
    const { className, style, onClick } = props;
    return (
        <span
            className={className}
            onClick={onClick}
        >
            <BsArrowLeft />
        </span>
    );
}

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 899,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const CaseSlider = ({ cases }) => {
    return (
        <Slider {...settings} className='case__slider'>
            {cases.map((item)=>(
                <CaseCard data={item} key={item._id} />
            ))}
        </Slider>
    );
};

export default CaseSlider;