import React from "react";

import { siteText } from "../constants";

// const siteText = [
//     {
//         text:["make", "site compliant with", "webstandard"],
//         title:"비트를 이용한 사이트제작",
//         code:"https://github.com/",
//         view:"https://github.com/",
//         info:[
//             "site coding",
//             "production period: two days",
//             use stack:HTML5/CSS3, CSS Variable,
//         ],
//     },
//     {
//         text: ["make", "site compliant with", "react.js"],
//         title: "리액트를 이용한 사이트 제작",
//         code: "http://github.com",
//         view: "http://github.com",
//         info: [
//             "site coding",
//             "production period : two days",
//             "use stack : HTML5/CSS3, CSS Variable, Vite",
//         ],
//     },
//     {
//         text: ["make", "site compliant with", "vue.js"],
//         title: "뷰를 이용한 사이트 제작",
//         code: "http://github.com",
//         view: "http://github.com",
//         info: [
//             "site coding",
//             "production period : two days",
//             "use stack : HTML5/CSS3, Scss Variable, vue",
//         ],
//     },
//     {
//         text: ["make", "site compliant with", "next.js"],
//         title: "넥스트를 이용한 사이트 제작",
//         code: "http://github.com",
//         view: "http://github.com",
//         info: [
//             "site coding",
//             "production period : two days",
//             "use stack : HTML5/CSS3, Scss Variable, next.js",
//         ],
//     },
// ]


const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">portfolio 포폴 작업물</h2>
                <div className="site__wrap">

                    {siteText.map((site,key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                {/* <a href={site.code}>code</a> */}
                                <a href={site.view} target="_blank">view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                {/* <span>{site.info[2]}</span> */}
                            </div>
                            <div className="img_center">
                                <img src={site.img} /><img src={site.img2} />
                            </div>
                        </article>
                    ))}


                    {/* <article className="site__item s1">
                        <span className="num">1.</span>
                        <div className="text">
                            <div>make</div>
                            <div>site compliant with</div>
                            <div>webstandard</div>
                        </div>

                        <h3 className="title">웹표준 준수 사이트</h3>
                        <div className="btn">
                            <a href="https://github.com/">code</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>two days</span>
                            <span>use stack : html5, css3, CSS variable</span>
                        </div>
                    </article>

                    <article className="site__item s1">
                        <span className="num">1.</span>
                        <div className="text">
                            <div>make</div>
                            <div>site compliant with</div>
                            <div>webstandard</div>
                        </div>

                        <h3 className="title">웹표준 준수 사이트</h3>
                        <div className="btn">
                            <a href="https://github.com/">code</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>two days</span>
                            <span>use stack : html5, css3, CSS variable</span>
                        </div>
                    </article>

                    <article className="site__item s1">
                        <span className="num">1.</span>
                        <div className="text">
                            <div>make</div>
                            <div>site compliant with</div>
                            <div>webstandard</div>
                        </div>

                        <h3 className="title">웹표준 준수 사이트</h3>
                        <div className="btn">
                            <a href="https://github.com/">code</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>two days</span>
                            <span>use stack : html5, css3, CSS variable</span>
                        </div>
                    </article>

                    <article className="site__item s1">
                        <span className="num">1.</span>
                        <div className="text">
                            <div>make</div>
                            <div>site compliant with</div>
                            <div>webstandard</div>
                        </div>

                        <h3 className="title">웹표준 준수 사이트</h3>
                        <div className="btn">
                            <a href="https://github.com/">code</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>two days</span>
                            <span>use stack : html5, css3, CSS variable</span>
                        </div>
                    </article>

                    <article className="site__item s1">
                        <span className="num">1.</span>
                        <div className="text">
                            <div>make</div>
                            <div>site compliant with</div>
                            <div>webstandard</div>
                        </div>

                        <h3 className="title">웹표준 준수 사이트</h3>
                        <div className="btn">
                            <a href="https://github.com/">code</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>two days</span>
                            <span>use stack : html5, css3, CSS variable</span>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    )
}

export default Site;