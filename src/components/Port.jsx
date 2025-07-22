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
                나의 프로젝트
            </h2>
        </div>
        <div className="port__wrap">

            {/* <div className="flx_box">
                <span>1.</span>
                <span className="date">2025년 04월 ~ 2025년 08월</span>
                <h3>교보생명 FP소장 AI Assistance 고도화</h3>
                <p>
                    교보생명 FP소장 AI Assistance 퍼블리싱 업무
                </p>
            </div>

            <div>
                <span>2. 2024년 09월 ~ 2025년 01월</span>
                <h3>신한카드 장기렌터카 반응형 구축</h3>
                <p>
                    신한카드 장기렌터카 반응형 퍼블리싱 업무
                </p>
            </div>

            <div>
                <span>3. 2024년 08월 ~ 2024년 08월</span>
                <h3>두산그룹 FCM 내부 시스템</h3>
                <p>
                    두산그룹 FCM 내부 시스템 퍼블리싱 업무
                </p>
            </div> */}

            <div className="flx_box">
                {skillText.map((skill,key) => (
                    <div key={key} className="flx_box">
                        <div className="flx_box_center">
                            <div>
                                <span>{key + 1}</span>
                                <span className="date">{skill.date}</span>
                                <h3>{skill.title}</h3>
                                <p>{skill.desc}</p>
                                <p>{skill.work}</p>
                            </div>
                            <p className="img-box"><img src={skill.img} alt="" className={`img` + (key + 1)} /></p>
                        </div>
                        
                    </div>
                ))}
            </div>
            

            {/* <Swiper 
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

            </Swiper> */}
        </div>
    </section>



  );
}

export default Port;