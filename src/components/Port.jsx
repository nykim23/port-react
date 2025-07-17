import React, { useEffect, useRef } from "react";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);


// import port01 from "../assets/img/port01.jpg";
// import port02 from "../assets/img/port02.jpg";
// import port03 from "../assets/img/port03.jpg";
// import port04 from "../assets/img/port04.jpg";
// import port05 from "../assets/img/port05.jpg";
// import port06 from "../assets/img/port06.jpg";
// import port07 from "../assets/img/port07.jpg";
// import port08 from "../assets/img/port08.jpg";
// import port09 from "../assets/img/port09.jpg";
// import port10 from "../assets/img/port10.jpg";

// const portText = [
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
// ]


const Port = () => {
  const myElement = useRef(null);

  const horizontalRef = useRef(null);
      const sectionsRef = useRef([]);

  useEffect(() => {
          gsap.registerPlugin(ScrollTrigger);
  
          const horizontal = horizontalRef.current;
          const sections = sectionsRef.current;
  
  
          let scrollTween = gsap.to(sections, {
              xPercent:-120 * (sections.length -1),
              ease:"none",
              scrollTrigger: {
                  trigger: horizontal,
                  start:"top 56px",
                //   end: () => "+=" + horizontal.offsetWidth,
                  pin:true,
                  scrub:1,
                  invalidateOnRefresh:true,
                  anticipatePin: 1,
              },
          });
  
          return () => {
              scrollTween.kill();
          }
      })

  return (
    // <div ref={myElement}>Content</div>
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



            {/* <article className="port__item p1">
                <span className="num">01.</span>
                <a href="http://github.com" target="_blank" className="img" rel="noreferrer">
                    <img scr="../assets/img/port01.jpg" alt="포트폴리오" />
                </a>
                <h3 className="title">어워드에도 올라간 포트폴리오</h3>
                <p className="desc">
                    라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오
                </p>
                <a href="http://" target="_blank" className="site" rel="noreferrer">사이트 보기</a>
            </article>

            <article className="port__item p1">
                <span className="num">01.</span>
                <a href="http://github.com" target="_blank" className="img" rel="noreferrer">
                    <img scr="../assets/img/port01.jpg" alt="포트폴리오" />
                </a>
                <h3 className="title">어워드에도 올라간 포트폴리오</h3>
                <p className="desc">
                    라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오
                </p>
                <a href="http://" target="_blank" className="site" rel="noreferrer">사이트 보기</a>
            </article>

            <article className="port__item p1">
                <span className="num">01.</span>
                <a href="http://github.com" target="_blank" className="img" rel="noreferrer">
                    <img scr="../assets/img/port01.jpg" alt="포트폴리오" />
                </a>
                <h3 className="title">어워드에도 올라간 포트폴리오</h3>
                <p className="desc">
                    라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오
                </p>
                <a href="http://" target="_blank" className="site" rel="noreferrer">사이트 보기</a>
            </article>

            <article className="port__item p1">
                <span className="num">01.</span>
                <a href="http://github.com" target="_blank" className="img" rel="noreferrer">
                    <img scr="../assets/img/port01.jpg" alt="포트폴리오" />
                </a>
                <h3 className="title">어워드에도 올라간 포트폴리오</h3>
                <p className="desc">
                    라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오
                </p>
                <a href="http://" target="_blank" className="site" rel="noreferrer">사이트 보기</a>
            </article>

            <article className="port__item p1">
                <span className="num">01.</span>
                <a href="http://github.com" target="_blank" className="img" rel="noreferrer">
                    <img scr="../assets/img/port01.jpg" alt="포트폴리오" />
                </a>
                <h3 className="title">어워드에도 올라간 포트폴리오</h3>
                <p className="desc">
                    라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오
                </p>
                <a href="http://" target="_blank" className="site" rel="noreferrer">사이트 보기</a>
            </article> */}



            </Swiper>
        </div>
    </section>



  );
}

export default Port;