import React, { useState } from "react";

import { footerText } from "../constants";
import SignUp from "../components/SignUp";

// const footerText = [
//     {
//         title:"youtube",
//         desc:"유투브",
//         link: "https://www.youtube.com"
//     },
//     {
//         title:"github",
//         desc:"유투브",
//         link: "https://www.youtube.com"
//     },
//     {
//         title:"gsap",
//         desc:"유투브",
//         link: "https://www.youtube.com"
//     },
//     {
//         title:"react",
//         desc:"유투브",
//         link: "https://www.youtube.com"
//     },
//     {
//         title:"vue",
//         desc:"유투브",
//         link: "https://www.youtube.com"
//     },
//     {
//         title:"next",
//         desc:"유투브",
//         link: "https://www.youtube.com"
//     },
// ]


import { useNavigate } from 'react-router-dom';


const Footer = () => {
    
    //페이지 이동
    // const navigate = useNavigate();

    // function handleClick() {
    //     navigate('/SignUp');
    // }

    const [showSignUp, setShowSignUp] = useState(false);

    const toggleMenu = () => {
        setShowSignUp(prevShow => !prevShow);
    }


    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>ny.kim</span>
                    <span>web Publiser</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            {/* <a href="/">sign up</a> */}
                            {/* <button onClick={handleClick}>sign up</button> */}
                            <button onClick={toggleMenu}>sign up</button>
                        </div>
                        <p>회원가입을 하시면....</p>
                    </div>

                    <div className="right">
                        <h3>social</h3>

                        

                        <ul>

                            {footerText.map((footer,key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                            {/* <li>
                                <a href="http://www.youtube.com">youtube</a>
                                <em>안녕하세요</em>
                            </li>
                            <li>
                                <a href="http://www.youtube.com">youtube</a>
                                <em>안녕하세요</em>
                            </li>
                            <li>
                                <a href="http://www.youtube.com">youtube</a>
                                <em>안녕하세요</em>
                            </li>
                            <li>
                                <a href="http://www.youtube.com">youtube</a>
                                <em>안녕하세요</em>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    리액트
                </div>
            </div>
            <SignUp show={showSignUp} />
        </footer>
    );
};

export default Footer;