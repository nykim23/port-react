import React, { useEffect, useRef } from "react";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


import { skillText } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Skip = () => {
    return (

        <section id="port">
            <div className="port__inner">
                <h2 className="port__title">
                    portfolio 포폴 작업물
                </h2>
            </div>
            <div className="port__wrap">

                <Swiper 
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction:false,
                    }}
                    breackpoints={{
                        640: {
                            slidesPerView:5,
                            spaceBetween:15,
                        },
                        768: {
                            slidePerView:6,
                            spaceBetween:15,
                        },
                        1024: {
                            slidePerView:7,
                            spaceBetween:20,
                        },
                        1240: {
                            slidePerView:8,
                            spaceBetween:20,
                        },
                        1640: {
                            slidePerView:9,
                            spaceBetween:20,
                        },
                        2000: {
                            slidePerView:10,
                            spaceBetween:20,
                        },
                    }}

                    modules={[Navigation,Autoplay]}
                    className='mySwiper'
                >
                

                {portText.map((port,key) => (
                    <SwiperSlide key={key}>
                        <article className={`port__item p${key+1}`} key={key}>
                            <span className="num">{port.num}.</span>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer">
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트보기</a>
                        </article>
                    </SwiperSlide>
                ))}


                </Swiper>
            </div>
        </section>
        
    )
};

export default Skip;