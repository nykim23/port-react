import React from "react";

import { portText } from "../constants";

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
    return (
        <section id="port">
            <div className="port__inner">
                portfolio 포폴 작업물
            </div>
            <div className="port__wrap">
                {portText.map((port,key) => (
                    <article className={`port__item p${key+1}`} key={key}>
                        <span className="num">{port.num}.</span>
                        <a href={port.code} target="_blank" className="img" rel="noreferrer">
                            <img src={port.img} alt={port.name} />
                        </a>
                        <h3 className="title">{port.title}</h3>
                        <p className="desc">{port.desc}</p>
                        <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트보기</a>
                    </article>
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
            </div>
        </section>
    )
}

export default Port;