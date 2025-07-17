import React from "react";
import Slider from "react-slick";


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";


function AutoPlay() {
    const settings = {
        dots:false,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="slide-container">
            <Slider {...settings}>
                <div className="list01"><TiHtml5 /></div>
                <div className="list02"><FaCss3Alt /></div>
                <div className="list03"><IoLogoReact /></div>
                <div className="list04"><RiNextjsFill /></div>
                <div className="list05"><FaJs /></div>
                <div className="list06"><IoLogoGithub /></div>
            </Slider>
        </div>
    )
}

export default AutoPlay;