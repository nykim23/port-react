import React from "react";

import about from "../assets/img/about.jpg";

import { introText } from "../constants";
import { FaReact } from "react-icons/fa";

// const introText = {
//     title:"port developer",
//     desc:["talent is", "found","effort"],
// };

const Intro = () => {
    return (
         <section id="intro">
            <div className="intro__inner">
                <div className="intro_flx">
                    <FaReact className="react_icon" />
                    <h1 className="intro__title">Web Publisher</h1>
                </div>
                
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