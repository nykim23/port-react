import React from "react";

import about from "../assets/img/about.jpg";

import { introText } from "../constants";

// const introText = {
//     title:"port developer",
//     desc:["talent is", "found","effort"],
// };

const Intro = () => {
    return (
         <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">port developer</h1>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <div className="text">
                        {/* <div>talent is</div>
                        <div>found at the end of the</div>
                        <div>effort</div> */}

                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    )
};

export default Intro;