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


import { VscVscodeInsiders } from "react-icons/vsc";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { BsFiletypeJsx } from "react-icons/bs";

import Zeplin from "../assets/img/zeplin.svg";


function AutoPlayConverse() {
    const settings = {
        dots:false,
        infinite:true,
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        rtl: true, // 역방향 슬라이드 설정
    };

    return (
        <div className="slide-container">
            <Slider {...settings}>
                <div className="list07"><VscVscodeInsiders /></div>
                <div className="list08"><SiAdobephotoshop /></div>
                <div className="list09"><FaFigma /></div>
                <div className="list10"><SiAdobexd /></div>
                <div className="list11"><BsFiletypeJsx /></div>
                <div className="list12"><IoLogoGithub /></div>
                <div className="list13"><img src={Zeplin} alt="zeplin" /></div>
            </Slider>
        </div>
    )
}

export default AutoPlayConverse;