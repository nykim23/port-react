import React, { useEffect, useRef } from "react";

import { etcText } from "../constants";
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

        <section id="etc">
            <div className="etc__inner">
                <h2 className="etc__title">
                    기타사항
                </h2>
            </div>
            <div className="etc__wrap">

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
                

                {etcText.map((etc,key) => (
                    <SwiperSlide key={key}>
                        <article className={`etc__item p${key+1}`} key={key}>
                            <span className="num">{etc.num}.</span>
                            <a href={etc.code} target="_blank" className="img" rel="noreferrer">
                                <img src={etc.img} alt={etc.name} />
                            </a>
                            <h3 className="title">{etc.title}</h3>
                            <p className="desc">{etc.desc1}</p>
                            <p className="desc">{etc.desc2}</p>
                            <p className="desc">{etc.desc3}</p>
                            <p className="desc">{etc.desc4}</p>
                            <a href={etc.view} target="_blank" className="site" rel="noreferrer">사이트보기</a>
                        </article>
                    </SwiperSlide>
                ))}


                </Swiper>
            </div>
        </section>
        
    )
};

export default Skip;